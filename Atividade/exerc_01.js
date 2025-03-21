/*1. Crie uma função que dado dois valores (passados como parâmetros) mostre no console a
soma, subtração, multiplicação e divisão desses valores.*/

function calculadora(valor1,valor2) {
    console.log("1º valor: " + valor1 +" 2º valor: " + valor2)
    console.log("Soma: ", valor1 + valor2);
    console.log("Subtração: ", valor1 - valor2);
    console.log("Multiplicação: ", valor1 * valor2);


if (valor2 !== 0){
    console.log("Divisão: ", valor1 / valor2);
} else{
    console.log("Divisão: Não é possivel dividir por zero ")
}
}
calculadora (85, 27);
