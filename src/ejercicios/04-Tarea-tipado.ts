/*
    //              //Inician comentarios en 21 y terminan en  *****************
    //              //  terminan en 81.
    ===== Código de TypeScript =====
    ===== Video  17 - Tarea sobre objetos e interfaces.  =====
*/

interface IDireccion {
    calle : string;
    pais : string;
    ciudad : string;
}

interface ISuperHeroe {
    nombre: string;
    edad: number; 
    direccion : IDireccion;
    mostrarDireccion : () => void;
}

const superHeroe : ISuperHeroe = {
    nombre: 'Spiderman', 
    edad : 30,
    direccion : {
        calle: 'Main st',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion () {
        return this.nombre + ', ' + this.direccion.ciudad + ', ' +
        this.direccion.pais;
    }
}
