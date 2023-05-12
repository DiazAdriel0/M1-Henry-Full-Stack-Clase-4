'use strict';

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) { // n! = n * n-1 * ... * 1
  if(n === 0 || n === 1){
    return 1;
  }else if(n < 0){
    return console.log("Error, no se puede hacer el factorial de un número negativo")
  }

  return n * nFactorial(n - 1); // n * funcion ... 1 * funcion(0)
}

//OPCION ITERATIVA
/*
function nFactorial(n) {
  let factorial = n
  if(n === 1 || n === 0){
    return 1;
  }
  while(n > 1){
    n--
    factorial = factorial * n
  }
  return factorial;
*/

//LOGICA DETRAS
/* nFactorial(5)
nFactorial(5) = 5 * nFactorial(4) = 120
nFactorial(4) = 4 * nFactorial(3) = 24
nFactorial(3) = 3 * nFactorial(2) = 6
nFactorial(2) = 2 * nFactorial(1) = 2
nFactorial(1) = 1                 = 1 */

  function nFibonacci(n) {
    if (n === 0 || n === 1) {
      return n;
    }
  
    return nFibonacci(n - 1) + nFibonacci(n - 2);
  }

//OPCION ITERATIVA
/*
function nFibonacci(n, fibo = [0,1]) {
  if(fibo.length > n){
    return fibo[n];
  }
  fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2])
  return nFibonacci(n,fibo);
}
*/

//LOGICA DETRAS
/* nFibonacci(5) =  nFibonacci(4) + nFibonacci(3)
      5                 3       +       2

nFibonacci(4) =  nFibonacci(3) + nFibonacci(2)
      3                  2      +        1
      
nFibonacci(3) =  nFibonacci(2) + nFibonacci(1)          
       2               1       +      1

nFibonacci(2) =  nFibonacci(1) + nFibonacci(0)          
      1                1       +      0       */




/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {
  this.arr = [];
}

Queue.prototype.enqueue = function(valor){
  this.arr.push(valor)
}

Queue.prototype.dequeue = function(){
  return this.arr.shift()
}

Queue.prototype.size = function(){
  return this.arr.length
}

//CON CLASS
/* class Queue{
  constructor(){
    this.queue = [];
  }
  enqueue(valor){
    this.queue.push(valor)
  }
  dequeue(){
    return this.queue.shift()
  }
  size(){
    return this.queue.length
  }
} */


/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
