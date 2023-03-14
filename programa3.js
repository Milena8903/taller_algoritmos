function calcular_hipotenusa(a, b){
    
    //Math.pow(a,2)
    const hipotenusa = Math.sqrt(a**2 + b**2);
    return hipotenusa;
}


//Esta función retorna valores
//let resultado = calcular (5,4);
let resultado = calcular_hipotenusa(10, 20);

console.log(resultado);