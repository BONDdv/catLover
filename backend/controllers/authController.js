import jwt from "jsonwebtoken";
import {users} from "../data/users.js";

const SECRET = "catlover_secret";

export const login = (req, res) => {

  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign({ username }, SECRET, { expiresIn: "1h" });
  res.json({ token });
};
