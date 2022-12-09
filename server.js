import "dotenv/config";
import express from "express";
import cors from "cors";
import dataRoutes from "./routes/route.js";


const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1/", dataRoutes);
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`🚀 Server is ready at http://localhost:${PORT}`);
});
