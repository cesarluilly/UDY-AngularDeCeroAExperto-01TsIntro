/*
    //              //Inician comentarios en 21 y terminan en  *****************
    //              //  terminan en 81.
    ===== Código de TypeScript =====
    ===== Video  22 - Clases basicas.  =====
*/

class Heroe {
    alterEgo: string;
    edad: number;
    nombreReal: number;

    imprimirEgo(){
        return this.alterEgo + ' ' + this.nombreReal;
    }
}

const iroman = new Heroe();
console.log(iroman);







