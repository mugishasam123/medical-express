import "dotenv/config";
import express from "express";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";
import dataRoutes from "./routes/route.js";
import authenticateToken from "./utils/auth.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const filename = path.resolve(__dirname, "data", "MedicalData.xlsx");
app.use(cors());
app.use(express.json());

app.use(authenticateToken);
app.use("/api/medicaldata", dataRoutes);
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`🚀 Server is ready at http://localhost:${PORT}`);
});
