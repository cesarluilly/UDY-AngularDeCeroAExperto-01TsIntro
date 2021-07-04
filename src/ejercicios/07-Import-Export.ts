/*
    //              //Inician comentarios en 21 y terminan en  *****************
    //              //  terminan en 81.
    ===== Código de TypeScript =====
    ===== Video  21 - Importaciones y exportaciones.  =====
*/
//                  //Aqui se esta haciendo una desescruturacion del archivo.
//                  //  Es decir este archivo esta exportando un objeto y de este
//                  //  objeto me interesa el Producto.

//                  //Hay diferetes tipos de importaciones pero en este caso esta 
//                  //  es la importacion tradicional.
import { IProducto, calcularISV } from './06-Desescruturacion-funcion-argumentos';
//                  //Nota. Esta importacion hace que el archivo se ejecute, y al ejecutarse
//                  //  va a estar imprimiendo en consola todos los console.log().


//                  //Una manera sencilla de importar 
//                  //  es dejar el cursor encima
//                  //  y teclar "Ctl + ." y seleccionamos
//                  //  importacion. 
const carritroCompras : IProducto [] = [
    {
        des: 'Telefono 1',
        precio: 100
    },
    {
        des: 'Telefono 2',
        precio: 200
    }
];

const [total, isv] = calcularISV(carritroCompras);
console.log('Total ', total);
console.log('ISV', isv);












