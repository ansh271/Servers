import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Initialize OpenAI client once
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Root route
app.get("/", (req, res) => {
  res.send("API is working fine 🚀");
});

// POST /api/chat
app.post("/api/chat", async (req, res) => {
  try {
    const { userInput } = req.body;

    const response = await openai.responses.create({
      model: "gpt-4o-mini",
      input: userInput,
      max_output_tokens: 200,
      temperature: 0.7,
    });

    // Extract output text (shortcut provided by SDK)
    const output = response.output_text;

    res.json({ output });
  } catch (err) {
    console.error("OpenAI API Error:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
