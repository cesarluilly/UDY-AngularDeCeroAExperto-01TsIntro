/*
    //              //Inician comentarios en 21 y terminan en  *****************
    //              //  terminan en 81.
    ===== Código de TypeScript =====
    ===== Video  15 y 16- Funciones basicas  =====
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

//                  //Definicion de una interfas.                
interface IPersonajeLOR {
    nombre : string;
    pv: number;
    //              //Declara una funcion en su forma corta.
    mostraHP: () => void; 
}

function curar( 
    personaje : IPersonajeLOR, 
    curarX : number 
    ) : void{

    personaje.pv += curarX; 
    console.log(personaje);
}

const nuevoPersonaje : IPersonajeLOR = {
    nombre: 'Strider',
    pv : 50,
    mostraHP() {
        console.log('Puntos de vida:', this.pv)
    }
}

curar(nuevoPersonaje , 20);
nuevoPersonaje.mostraHP();





