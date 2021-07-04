/*
    //              //Inician comentarios en 21 y terminan en  *****************
    //              //  terminan en 81.
    ===== Código de TypeScript =====
    ===== Video  22 y 23- Clases basicas y Constructo de una clase.  =====
    ===== Video  24 - Extender una clase  =====
*/

//                  //Forma 1 de recibir argumentos en el constructor y
//                  //  asignarlo.
// class Heroe {
//     public alterEgo: string;
//     public edad: number;
//     public nombreReal: string;

//     constructor(alterEgo: string, edad: number, nombreReal: string){
//         this.alterEgo = alterEgo;
//         this.edad = edad;
//         this.nombreReal = nombreReal;
//     }
// }

class PersonaNormal {
    
    constructor(
        public nombre: string, 
        public direccion: string
    ){

    }
}

//                  //Forma 2 de recibir argumentos en el constructor y
//                  //  asignarlo.
class Heroe extends PersonaNormal{

    constructor(
        //          //Vamos a ver mas adelante, en los siguientes videos, 
        //          //  que la inyeccion de dependencia de Angular es 
        //          //  casi igual a esto.

        public alterEgo: string, 
        //          //Arguementos opcionales.
        public edad?: number, 
        public nombreReal?: string
    ){
        //          //Si no le pongo el this, me estoy refiriendo como tal al 
        //          //  parametro que recibo en el constructor.
        super(nombreReal, 'New york USA');
    }
}

const iroman = new Heroe("IronMan");
const iroman2 = new Heroe("Spiderman", 20, 'Cesar');
console.log('-------');
console.log(iroman);
console.log(iroman2);







