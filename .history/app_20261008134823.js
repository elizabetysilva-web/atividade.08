import express from "express";
import amostraRoutes from "./routes/amostraRoutes.js";

const app = express();

app.use(express.json());
app.use("/amostras", amostraRoutes);

app.listen(3001, () => {
  console.log("LabSample API rodando na porta 3001");
});
