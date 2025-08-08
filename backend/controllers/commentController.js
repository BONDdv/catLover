import {comments} from "../data/comments.js"

export const getComments = (req, res) => {
  const imageId = req.query.imageId;
  const imageComments = comments.filter(c => c.imageId === imageId);
  res.json(imageComments);
};

export const postComment = (req, res) => {
  const { imageId, text } = req.body;
  const comment = { imageId, text, username: req.user.username };
  comments.push(comment);
  res.status(201).json(comment);
};
