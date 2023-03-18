function media(){
    
    //variable
    //del documento objeto un elemento con id
    //enlace con un id en el id
    let campo_x = document.getElementById('x');
    let campo_y = document.getElementById('y');
    let campo_z = document.getElementById('z');
    //valla y busque el emparejamiento
    //busque en el dom, un elemennto q tenngo un id q sea x
    //lo relaciona

    //Se realiza el casting: Transformar de manera
    //explicita el tipo de dato de una 
    //variable en js
    //let x = parseInt(campo_x.value);
    //let y = parseInt(campo_y.value);
    //let z = parseInt(campo_z.value);


    //unna forma abreviada de colocar el código es
    let x = parseInt(document.getElementById('x').value);
    let y = parseInt(document.getElementById('y').value);
    let z = parseInt(document.getElementById('z').value);


    //se imprime por consola
    //console.log(campo_x.value);
    //console.log(campo_y.value);
    //console.log(campo_z.value);
    

    //un elemennto esta represetando al
    //elemento del dom que es el campo x y
    //otro elemento q es x estar representando
    //el valor que se encuentra en ese elemento del dom

    //let promedio = (campo_x.value + campo_y.value + campo_z.value)/3

    let promedio = (x + y + z)/3

    console.log(promedio);

    //como el algoritmo dice q ahí q retornar el 
    //no sacar por cosola se pone return

    return promedio;
}

//Escriba programas como si el que lo fuera a mantener
//fuese un sicopata que conoce donde vive