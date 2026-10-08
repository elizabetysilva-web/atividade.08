import Amostra from "../model/Amostra.js";
import * as repository from "../repository/amostraRepository.js";
 
export function cadastrarAmostra(req, res) {
  const { codigo, material, origem, resultado } = req.body;
  const amostra = new Amostra(codigo, material, origem, resultado);
 
  repository.cadastrar(amostra);
  res.status(201).json(amostra);
}
 
export function listarAmostras(req, res) {
  res.status(200).json(repository.listar());
}
 
export function buscarAmostra(req, res) {
  const indice = Number(req.params.indice);
  const amostra = repository.buscarPorIndice(indice);
 
  if (!amostra) {
    return res.status(404).json({ mensagem: "Amostra não encontrada" });
  }
 
  res.status(200).json(amostra);
}
 
export function excluirAmostra(req, res) {
  const indice = Number(req.params.indice);
  const amostra = repository.buscarPorIndice(indice);
 
  if (!amostra) {
    return res.status(404).json({ mensagem: "Amostra não encontrada" });
  }
 
  const removida = repository.excluir(indice);
  res.status(200).json({ mensagem: "Amostra excluída", amostra: removida });
}
 
export function atualizarAmostra(req, res) {
  const indice = Number(req.params.indice);
  const amostra = repository.buscarPorIndice(indice);
 
  if (!amostra) {
    return res.status(404).json({ mensagem: "Amostra não encontrada" });
  }
 
  const atualizada = repository.atualizar(indice, req.body);
  res.status(200).json(atualizada);
}