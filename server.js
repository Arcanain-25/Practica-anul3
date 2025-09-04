import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const API_KEY = process.env.API_NINJAS_KEY;

app.use(cors());
app.use(express.json());

// Роут поиска машин
app.get("/api/cars", async (req, res) => {
  const { model, year } = req.query;

  if (!API_KEY) return res.status(500).json({ error: "API key не установлен" });

  try {
    const query = new URLSearchParams();
    if (model) query.append("model", model);
    if (year && !isNaN(Number(year))) query.append("year", year);

    const response = await fetch(`https://api.api-ninjas.com/v1/cars?${query.toString()}`, {
      headers: { "X-Api-Key": API_KEY },
    });

    if (!response.ok) {
      const text = await response.text();
      return res.status(response.status).json({ error: text });
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});

