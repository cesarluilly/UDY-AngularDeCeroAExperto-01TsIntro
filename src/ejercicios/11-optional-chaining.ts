/*
    //              //Inician comentarios en 21 y terminan en  *****************
    //              //  terminan en 81.
    ===== Código de TypeScript =====
    ===== Video  27 - Encadenamiento opcional =====
*/


interface IPasajero{
    nombre: string,
    hijos?: string[]
}

const pasajero1: IPasajero = {
    nombre: 'Cesar'
};

const pasajero2: IPasajero = {
    nombre: 'Cesar',
    hijos: ['Natalia', 'Cesar']
};

function imprimehijos( pasajero: IPasajero) : void {
    //              //Si hijos es "Udefined" o "null" entonces
    //              //  va a devolver 0.
    //              //De lo contrario, si existen los hijos, con
    //              //  length me devuelve cuantos elementos hay.
    //              //Udefine y null tiene menos peso que un entero
    //              //  y por eso se le pone el 0, Zero.
    const cuantosHijos = pasajero.hijos?.length || 0;
    console.log(cuantosHijos);
}
imprimehijos(pasajero1);



