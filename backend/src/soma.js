function soma(n1, n2) {
  if (typeof n1 === 'number' && typeof n2 === 'number') {
    return n1 + n2;
  }
  return 'os parâmetros da função soma devem ser numéricos';
}

module.exports = soma;
