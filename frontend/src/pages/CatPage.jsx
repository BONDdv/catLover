import { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";  

const CatPage = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [imageUrl, setImageUrl] = useState("");
  const [imageId, setImageId] = useState("");
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const [loadingCat, setLoadingCat] = useState(false);
  const [loadingComments, setLoadingComments] = useState(false);

  const fetchCat = async () => {
    setLoadingCat(true);
    try {
      const res = await axios.get("http://localhost:8010/api/cat", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setImageUrl(res.data.url);
      setImageId(res.data.imageId);
      setCommentInput("");
      setLoadingCat(false);
    } catch (error) {
      setLoadingCat(false);
      toast.error("Failed to load cat image");
    }
  };

  const fetchComments = async () => {
    if (!imageId) return;
    setLoadingComments(true);
    try {
      const res = await axios.get(
        `http://localhost:8010/api/comments?imageId=${imageId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setComments(res.data);
      setLoadingComments(false);
    } catch (error) {
      setLoadingComments(false);
      toast.error("Failed to load comments");
    }
  };

  useEffect(() => {
    fetchCat();
  }, []);

  useEffect(() => {
    fetchComments();
  }, [imageId]);

  const handleNewCat = () => {
    fetchCat();
  };

  const handleSendComment = async () => {
    if (!commentInput.trim()) {
      toast.error("Comment cannot be empty");
      return;
    }
    try {
      await axios.post(
        "http://localhost:8010/api/comments",
        { imageId, text: commentInput },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCommentInput("");
      fetchComments();
      toast.success("Comment posted!");
    } catch (error) {
      toast.error("Failed to post comment");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    toast.success("Logged out successfully");
    navigate("/"); 
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-full max-w-md flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold text-gray-800">Cat Lover</h2>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded transition-colors"
        >
          Logout
        </button>
      </div>

      <div className="bg-white p-4 rounded shadow-md w-full max-w-md text-center">
        {loadingCat ? (
          <p>Loading cat image...</p>
        ) : (
          <img
            src={imageUrl}
            alt="Random Cat"
            className="mx-auto rounded max-h-96"
          />
        )}

        <button
          onClick={handleNewCat}
          className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition-colors"
          disabled={loadingCat}
        >
          New Cat
        </button>

        <div className="mt-6 text-left">
          <h3 className="text-xl font-semibold mb-2">Comments:</h3>
          {loadingComments ? (
            <p>Loading comments...</p>
          ) : comments.length === 0 ? (
            <p className="italic text-gray-500">No comments yet.</p>
          ) : (
            comments.map((c, i) => (
              <p key={i} className="mb-1">
                <b>{c.username}:</b> {c.text}
              </p>
            ))
          )}
        </div>

        <textarea
          className="w-full mt-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          rows={3}
          placeholder="Write a comment..."
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
        />

        <button
          onClick={handleSendComment}
          className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition-colors"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default CatPage;
