/*
    //              //Inician comentarios en 21 y terminan en  *****************
    //              //  terminan en 81.
    ===== Código de TypeScript =====
    ===== Video  26 - Decoradores =====
*/
function classDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
  ) {
    return class extends constructor {
      newProperty = "new property";
      hello = "override";
    };
  }

  //                //Los decoradores sirven para añadir o expandir 
  //                //  funcionalidades especiales.
  //                //Nosotros utilizamos los decoradores para que angular
  //                //  pueda identificar como va a funcionar una clase.
  //                //Es decir, si el decorador es de un componente, nosotros
  //                //  que esta clase va a funcionar como un componente.
@classDecorator
class MiSuperClase {
    public miPropiedad: string = 'ABC123';

    imprimir(){
        console.log('Hola mundo');
    }
}

console.log(MiSuperClase);

const miClase = new MiSuperClase();
console.log(miClase.miPropiedad);




