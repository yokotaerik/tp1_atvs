function isEmptyOrWhitespace(str: string) {
    // Verifica se a string é nula, indefinida ou, após remover espaços, é vazia
    return str === null || str === undefined || str.trim() === '';
}

export default isEmptyOrWhitespace