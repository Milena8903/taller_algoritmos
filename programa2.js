function calcular(base, altura){
 
 //let para variable de ámbito local (recomendado)
 //var para ámbito global
//    let area;
  //  let perimetro;


 //Constante: Valor q ua vez asignado nunca cambia
    
    area = base * altura;
    perimetro = 2 * (base + altura);

    //Valores que retorna la función a quin la llama
    return [area, perimetro];
}

//Esta funcion retorna valores
//calcular(5, 4);

//se guarda el resultado de esa funcion
let resultado = calcular(5, 4);

//Imprimir el área en la posición cero
console.log(resultado[0])