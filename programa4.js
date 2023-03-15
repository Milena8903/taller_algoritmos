function calculadora(a,b){
    //console.log(a+b);
    document.writeln(a+b);
    document.writeln(a-b);
    document.writeln(a*b);
    document.writeln(a/b);

    console.log(a+b);
    console.warn(a-b);
    console.error(a*b);
    console.info(a/b);
}

//llamar la funcion:
//colocar el nombre de la funcion y pasarle los valores a los
//parametros q estan alli
calculadora(5,4)
//2 parametros, valores son los argumentos
//en el dom, haciendo referencia al
//objeto document escribir en ella el write