/*
    //              //Inician comentarios en 21 y terminan en  *****************
    //              //  terminan en 81.
    ===== Código de TypeScript =====
*/
interface IDetalle{
    autor: string;
    anio: number;
}

interface IReproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: IDetalle;
}

const reproductor: IReproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheran',
        anio: 2015
    }
} 

//                  //La desestructuracion nos ayuda a no repetir varias veses
//                  //  algunas lineas de codigo, en este caso es el 'repreductor'.
console.log('El volumnen actual de: ', reproductor.volumen);
console.log('El segundo actual de: ', reproductor.segundo);
console.log('El cancion actual de: ', reproductor.cancion);
console.log('El autor es: ', reproductor.detalles.autor);

const autor = 'Cesar';

//                  //Solucion 1 con desestructuracion.
const {volumen, segundo, cancion, detalles } = reproductor;
//                  //autorDetalle es el nuevo nombre para la propiedad 
//                  //  que estoy estrayendo.
const { autor : autorDetalle} = detalles;

//                  //Solucion 2 con desestructuracion.
// const {volumen, segundo, cancion, detalles: {autor : autorDetalle} } = reproductor;

console.log('El volumnen actual de: ', volumen);
console.log('El segundo actual de: ', segundo);
console.log('El cancion actual de: ', cancion);
console.log('El autor es: ', autorDetalle);








