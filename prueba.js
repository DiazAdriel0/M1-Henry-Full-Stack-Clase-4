function nFibonacci(n) { // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] T: indexOf(n) o indexOf(n) + 1 (No está claro el enunciado)
    //Fibonacci 0, 1, 0+1=1, 1+1=2, 1+2=3, ... , x[a-2]+x[a-1]=x[a]
    let newParam = n - 1
    if(n > 0){
      
      return nFibonacci(newParam);
    }else{
      
    }
  }

  console.log(nFibonacci(4))



function nFibonacci(n) { // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] T: indexOf(n) o indexOf(n) + 1 (No está claro el enunciado)
    //Fibonacci 0, 1, 0+1=1, 1+1=2, 1+2=3, ... , x[a-2]+x[a-1]=x[a]
    //          numPrev2 , numPrev1, numPrev2+numPrev1=num
    //          0, 1, 1+fn ,     
    let arrFibonacci = [0,1];        
    let newParam = n - 1;
    return function a(n){
        if(n > 0){
        let numPrev1 = arrFibonacci[arrFibonacci.length - 1];
        let numPrev2 = arrFibonacci[arrFibonacci.length - 2];
        let num = numPrev2 + numPrev1
        arrFibonacci.push(num)
        return a(newParam);
        }else{
            return 
        }
    }
  }

  function nFibonacci(n) { // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] T: indexOf(n) o indexOf(n) + 1 (No está claro el enunciado)
    //Fibonacci 0, 1, 0+1=1, 1+1=2, 1+2=3, ... , x[a-2]+x[a-1]=x[a]
    //          0, 1, 1+anterior=res, res+anterior=res 
    //          0, 1, 1+fn ,      
    let array = [0,1]
    let newParam = n - 1;
    function iteracion(n){
        if(n > 0){

            let anterior = 0 + 1;
            let res = a;
            return iteracion(newParam);
        }else{
            return array;
        }
    }
}

console.log(nFibonacci(4))

function nFibonacci(n) { // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] T: indexOf(n) o indexOf(n) + 1 (No está claro el enunciado)
    //Fibonacci 0, 1, 0+1=1, 1+1=2, 1+2=3, ... , x[a-2]+x[a-1]=x[a]
    //          numPrev2 , numPrev1, numPrev2+numPrev1=num
    //          0, 1, 0+1=a , a+ultimo=b, b+ultimo=c  
    let arr = [0,1]      
    let newParam = n - 1;
    return function a(n){
        if(n > 0){
        let ultimo = arr[arr.length-1];
        return arr.push(ultimo + a(newParam));
        }else{
            return ultimo;
        }
    }
  }