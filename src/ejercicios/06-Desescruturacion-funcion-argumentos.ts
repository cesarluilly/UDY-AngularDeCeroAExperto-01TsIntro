/*
    //              //Inician comentarios en 21 y terminan en  *****************
    //              //  terminan en 81.
    ===== Código de TypeScript =====
    ===== Video 20 - Desescruturacion de argumentos.  =====
*/

//                  //Estoy exportando la interface llamada IProducto.
export interface IProducto {
    des: string, 
    precio: number
}

const telefono: IProducto = {
    des: 'Nokia A1',
    precio: 150
}

const tableta: IProducto = {
    des: 'Ipad a1',
    precio: 350
}

export function calcularISV(

    productos : IProducto[]
    //              //Devuelve un arreglo.
    ) : [number, number]
{
    let total = 0;

    //              //Forma 1 de recorrer un arreglo.
    // productos.forEach(
    //     (producto) => {
    //         total += producto.precio;
    //     });

    //              //Forma 2 de recorrer un arreglo con desescruturacio
    //              //  de argumentos.
    productos.forEach(
        ({precio}) => {
            total += precio;
        });

    return [total, total * 0.15];
}

const articulos : IProducto[] = [telefono, tableta];

//                  //Forma 1 de recibir los datos de la funcion.
// const isv = calcularISV(articulos);

//                  //Forma 2. de recibir los datos de la funcion
//                  //  con desescructuracion.

//                  //Lo que estamos haciendo es desescructurar lo 
//                  //  que devuelve el metodo en las 2 variables.
const [total, isv] = calcularISV(articulos);
console.log('Total:', total);
console.log('ISV:', isv);










