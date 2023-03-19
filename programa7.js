function calcular_tiempo(){

    let v1 = parseInt(document.getElementById("x").value);
    let v2 = parseInt(document.getElementById("y").value);
    let d = parseInt(document.getElementById("z").value);

    let t = d(v1 - v2);
    let tf = t *60;

    //resultado es ir al documento y obtener una
    //relacion con el elemento con el id resultado
    let resultado = document.getElementById("resultado");

    //es igual a lo que tenga guardado en la variable
    resultado.value = tf;
    return tf; 
}