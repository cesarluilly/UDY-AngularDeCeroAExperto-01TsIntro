/*
    //              //Inician comentarios en 21 y terminan en  *****************
    //              //  terminan en 81.
    ===== Código de TypeScript =====
    ===== Video 25 - Genericos  =====
*/


function queTipoSoy<T>(argumento : T){

    return argumento;
}

let soyString = queTipoSoy('Hola mundo');
let soyNumero = queTipoSoy(100);
let soyArreglo = queTipoSoy([0,1,2,3,4,5,6]);
let soyExplicito = queTipoSoy<number>(10);









