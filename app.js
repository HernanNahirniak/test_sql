import  info, { sumar, restar, multiplicar, dividir } from "./calculadora.js";

function calcular(calculo, num1,num2){
    calculo(num1,num2)

}
console.log(info);
let suma1 = calcular(sumar,20,10);
console.log(suma1);
let resta1 = calcular(restar(20, 10)); 
console.log(resta1);
let multi1 = calcular(multiplicar(20, 10)); 
console.log(multi1)
let multi2 = calcular(multiplicar(20, 0)); 
console.log(multi2);
let div1 = calcular(dividir(20, 4)); 
console.log(div1);
let div2 = calcular(dividir(20, 0)); 
console.log(div2);

