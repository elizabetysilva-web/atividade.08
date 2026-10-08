const amostras = [];
 
export function cadastrar(amostra) {
  amostras.push(amostra);
  return amostra;
}
 
export function listar() {
  return amostras;
}
 
export function buscarPorIndice(indice) {
  return amostras[indice];
}
 
export function excluir(indice) {
  return amostras.splice(indice, 1)[0];
}
 
// Atualiza apenas os campos enviados; os demais permanecem iguais
export function atualizar(indice, dados) {
  const amostra = amostras[indice];
 
  if (dados.codigo !== undefined) amostra.codigo = dados.codigo;
  if (dados.material !== undefined) amostra.material = dados.material;
  if (dados.origem !== undefined) amostra.origem = dados.origem;
  if (dados.resultado !== undefined) amostra.resultado = dados.resultado;
 
  return amostra;
}
 