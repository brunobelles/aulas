/**
 * FUNÇÕES E PROGRAMAÇÃO FUNCIONAL
 * Programação Funcional é um paradigma de programação da mesma forma que orientação a objetos
 */
function soma(num1, num2) {
  return num1 + num2;
}
console.log(soma(3, 5));
console.log(`Resultado da function soma: ${soma(3, 5)}`); // usando template strings

let variavel = soma;
console.log(`Resultado de let variavel = soma: ${variavel(5, 4)}`); // usando template strings

function operacao(funcao, num1, num2) {
  return funcao(num1, num2);
}
function add(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}
console.log(`Resultado de operação: ${operacao(sub, 10, 9)}`);
