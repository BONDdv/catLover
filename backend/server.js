import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js"
import catRoute from "./routes/catRoutes.js"
import commentRoute from "./routes/commentRoutes.js"

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api", catRoute);
app.use("/api", commentRoute);

app.listen(8010, () => console.log("server running on http://localhost:8010"));
