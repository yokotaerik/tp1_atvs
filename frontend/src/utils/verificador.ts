function isEmptyOrWhitespace(str: string) {
  // Verifica se a string é nula, indefinida ou, após remover espaços, é vazia
  if (str === null || str === undefined) {
    return true;
  }
}

export default isEmptyOrWhitespace;
