

// Gerar uma lista sequencial
// Parametros >> valor inicial | valor final
// Retorno >> lista

export function gerarListaSequencial(inicial, final) {

  const lista = [];

  for (let i = inicial; i <= final; i++) {
    lista.push(i);
  }

  return lista;

}