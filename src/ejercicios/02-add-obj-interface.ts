/*
    ===== Código de TypeScript =====
*/

let habilidades: (boolean | string)[] = ["Bash", "Counter"];

//                  //Las interfaces no ocupan espacio al momento de traducirse
//                  //  a javascript. Asi que podemos poner muchas interfaces
//                  //  pero no ocupan espacio en javascript.
interface IPersonaje {
    nombre : string; 
    hp : number; 
    habilidades : string[]; 
    //              //? nos permite recibir nulos en la propiedad.
    puebloNatal?: string[];
}

const personaje : IPersonaje = {
    nombre: 'Strider',
    hp: 100, 
    habilidades: ['Bash','Counter']
}













