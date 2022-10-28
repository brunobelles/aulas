/**     VAR E LET
 * O var e let tem diferença de escopo
 * O var é uma variável global, funciona em qualquer lugar do programa.
 * O let só funciona na porção de código onde foi declarado
 * */
if (true) {
  var a = 10;
  //let b = 20
}
let b = 30;
//console.log(a)
//console.log(b)
if (true) {
  //console.log(b)
}
/**
 * CONST
 * O escopo do const é o mesmo escopo do let
 * não é possível reatribuir uma variável declarada com const
 */
if (true) {
  let x = 2;
  x = 3;
  //console.log(x)
}
if (true) {
  const y = 4;
  //y = 5
  //console.log(y)
}
if (true) {
  const a = { nome: "Bruno" };
  a.nome = "Fulano";
  //console.log(a)
}

const valor = 10;
const valor1 = "10";
console.log(typeof valor);
console.log(typeof valor1);
if (valor == valor1) {
  console.log("valor == valor1: O valor é igual");
}
if (valor === valor1) {
  console.log("valor === valor1: O valor é estritamente igual");
}
