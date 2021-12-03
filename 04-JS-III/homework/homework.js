// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array.pop();
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  let array_new = [];
  for (let i = 0; i < array.length; i++) {
    array_new.push(array[i] + 1);
  }
  return array_new;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var cadena = "";
  if (palabras.length === 1) {
    return palabras[0];
  }
  for (var i = 0; i < palabras.length; i++) {
    if (i === 0) {
      cadena = palabras[i] + " ";
    } else if (i === palabras.length - 1) {
      cadena = cadena + palabras[i];
    } else {
      cadena = cadena + palabras[i] + " ";
    }
  }
  return cadena;
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  return array.includes(elemento);
}

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0;
  numeros.map((e) => (suma += e));
  return suma;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var valor = 0;
  resultadosTest.map((e) => (valor += e));
  return valor / resultadosTest.length;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  return Math.max.apply(null, numeros);
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var args = [...arguments];
  var producto = 1;
  if (args.length < 1) {
    return 0;
  }
  args.map((e) => (producto *= e));
  return producto;
}

function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var cont = 0;
  arreglo.map((e) => {
    if (e > 18) {
      cont++;
    }
  });
  return cont;
}

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
  //Escribe tu código aquí
  if (numeroDeDia > 1 && numeroDeDia < 7) {
    return "Es dia Laboral";
  }
  if (numeroDeDia === 1 || numeroDeDia === 7) {
    return "Es fin de semana";
  }
}

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  if (n === 9) {
    return true;
  }
  var result = n;
  var cond = true;
  while (cond) {
    if (Math.trunc(result) === 9) {
      return true;
    }
    result = result / 10;
    if (result < 1) {
      cond = false;
    }
  }
  return false;
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  var cond = true;
  var pos = 0;
  console.log("inicio");
  //aca pregunto si el arreglo trae un valor o vacio, si es true entonces ejecuta la funcion, sino devuelve false
  if (arreglo.length > 1) {
    //aca pregunto si esta en la ultima posicion
    while (cond) {
      console.log("inicio")
      for (var i = 0; i < arreglo.length; i++) {
        if (i === arreglo.length - 1 && cond && arreglo[pos] === arreglo[i-1]) {
          console.log("ultimo elemento");
          return true;
        }
        if (arreglo[pos] !== arreglo[i]) {
          console.log("no son iguales");
          return false;
        }
      };
      console.log("siguiente elemento");
      pos++;
    }
  };
  console.log("no hay elementos o es un solo elemento");
  return false;
}

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var cont = 0;
  var array_temp = [];
  array.map(e=>{
    if(e==="Enero"){
      array_temp.push(e);
      cont++;
    }
    if(e==="Marzo"){
      array_temp.push(e);
      cont++;
    }
    if(e==="Noviembre"){
      array_temp.push(e);
      cont++;
    }
  })
  if(cont === 3){
    return array_temp;
  }
  return "No se encontraron los meses pedidos";
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var array_temp = [];
  array.map(e => {
    if(e > 100){
      array_temp.push(e);
    }
  })
  return array_temp;
}

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var array_temp = [];
  for(var i = 0 ; i<10  ; i++){
    if (numero === i){
      return "Se interrumpió la ejecución"
    }
    numero += 2
    array_temp.push(numero);
  }
  return array_temp;
}

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array_temp = [];
  for(var i = 0 ; i<10  ; i++){
    if (5 === i){
      continue 
    }
    numero += 2
    array_temp.push(numero);
  }
  return array_temp;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement,
};
