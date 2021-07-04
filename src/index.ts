/*
    //              //Inician comentarios en 21 y terminan en  *****************
    //              //  terminan en 81.
    ===== Código de TypeScript =====
    ===== Video  22 y 23- Clases basicas y Constructo de una clase.  =====
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

//                  //Forma 2 de recibir argumentos en el constructor y
//                  //  asignarlo.
class Heroe {

    constructor(
        //          //Vamos a ver mas adelante, en los siguientes videos, 
        //          //  que la inyeccion de dependencia de Angular es 
        //          //  casi igual a esto.

        public alterEgo: string, 
        //          //Arguementos opcionales.
        public edad?: number, 
        public nombreReal?: string
    ){

    }
}

const iroman = new Heroe("IronMan");
const iroman2 = new Heroe("Spiderman", 20, 'Cesar');
console.log(iroman);
console.log(iroman2);







