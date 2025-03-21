/* Faça um algoritmo que calcule o fatorial de um número. */

function fatorial(numero) {
    if (numero < 0){
        console.log("O fatorial não é definido para números negativos. ");
        return null;
    }
     let fatorial = 1;
     for (let i = 1; i <= numero; i++) {
        fatorial *= i;
     }

     return fatorial;
}

const numero = 5;
const resultado = fatorial(numero);
console.log = (`O fatorial  de ${numero} é ${resultado}.`);