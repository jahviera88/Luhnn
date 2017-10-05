function isValidCard (tarjeta de credito válida) {
  tarjeta = document.getElementById('tarjeta').value;
  //preguntando al usuario.
    var answer = prompt("Cuál es el número de su tarjeta?");
    //respuesta
    var array=[4,4,3,3,8,1,0,6,4,8,6,8,2,4,0,1,4];    //n° tarjeta
    for (var i = 0; i < array.length; i++) {
      var item  = array.pop();
      array.splice(i,0, item);
    }
    console.log(array);
    // var resultado =paiImpar(numero)
    // if para numeros pares y para numeros pares
// if (numero % 2 ==0)
// if
    }

  if (!tarjeta.match(/^4\d{4}-?\d{3}-?\d{3}-?\d{8}-\d{1}-?\d{0}-?\d{6}-?\d{4}-\d{8}-?\d{6}-?\d{8}-?\d{2}-\d{4}-?\d{0}-?\d{1}-?\d{4}$/))
//expresion regular para taretas visa



  } while (true);
}
/*
algoritmo de luhn
orden de numero dada
4 4 3 3 8 1 0 6 4  8  6  8  2  4  0  1  4     digitosa<
orden de numeros inverso
4 1 0 4 2 8 6 8 4  6  0  1  8  3  3  4  4
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17
4 2 0 7 2 3 6 1 4  6  0  3  8  6  3  1  4  = 60%10=0 válida
