import express from "express";
import cors from "cors";


const app = express();

app.use(express.json());

app.use(cors());

app.post("/submit", (req, res) => {
  const { name, email, message } = req.body; 
  console.log("Received form data:", { name, email, message });
  res.status(200).json({ message: "Form submitted successfully!" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});