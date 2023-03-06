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


function calcular_hipotenusa(a, b){
    //Math.pow(a,2)
    const hipotenusa = Math.sqrt(a**2 + b**2);
    return hipotenusa;
}


//Esta función retorna valores
//let resultado = calcular (5,4);
let resultado = calcular_hipotenusa(10, 20);


//Imprimir el área
console.log(resultado[0])