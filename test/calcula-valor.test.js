const calculaValor = require('../src/calcula-valor.js');

test('Com um prestação o montante é igual ao capital', () => {
  // Operação
  const montante = calculaValor.calcularMontante(100, 0.0175, 1);

  // Resultado ou Comportamento esperado
  expect(montante).toBe(100);
});
