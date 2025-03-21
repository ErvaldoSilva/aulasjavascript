/*Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de
aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros
simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.*/

function calculadoraJuros(capitalInicial,taxaJuros,tempo) {
    const ci = parseFloat(capitalInicial);
    const tx = parseFloat(taxaJuros);
    const tp = parseFloat(tempo);
    
    const montante = ci + (ci * tx * tp);
    return montante;    
}
console.log(calculadoraJuros(1000,0.05,2))
