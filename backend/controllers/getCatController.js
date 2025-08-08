import { v4 as uuidv4 } from "uuid";

export const getCat = (req, res) => {
  const imageId = uuidv4(); 
  const url = `https://cataas.com/cat?timestamp=${Date.now()}`;
  res.json({ imageId, url });
};
