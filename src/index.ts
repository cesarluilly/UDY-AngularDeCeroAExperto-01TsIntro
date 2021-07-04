/*
    //              //Inician comentarios en 21 y terminan en  *****************
    //              //  terminan en 81.
    ===== Código de TypeScript =====
*/

//                  //Funcion normal.
function sumar(
    a: number, b: number
    ) : number 
{
    return a + b;
}

//                  //Funcion de tipo flecha.
const sumarFlecha = (a : number, b : number) : number => {
    return a + b;
}

//                  //Argumetos requeridos y opcionales.
function multiplicar (
    //              //Requerido.
    numero : number, 
    //              //Opcional.
    otroNumero ?: number, 
    //              //Inicializado con un valor por defaul.
    base : number = 2)
{
    return numero * base;
}


const resultado = multiplicar(10, 2);

console.log(resultado);





