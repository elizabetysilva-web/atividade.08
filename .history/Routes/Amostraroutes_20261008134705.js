import { Router } from "express";
import {
  cadastrarAmostra,
  listarAmostras,
  buscarAmostra,
  excluirAmostra,
  atualizarAmostra,
} from "../controller/amostraController.js";
 
const router = Router();
 
router.post("/", cadastrarAmostra);
router.get("/", listarAmostras);
router.get("/:indice", buscarAmostra);
router.delete("/:indice", excluirAmostra);
router.patch("/:indice", atualizarAmostra);
 
export default router;
 