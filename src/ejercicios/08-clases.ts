/*
    ===== Código de TypeScript =====
*/

class PersonaNormal {
    constructor(nombre:string, direccion:string){

    }
}


class Heroe extends PersonaNormal {
  public nombre: string;
  public direccion:string;

  constructor (
      public alterEgo: string,
      public edad: number,
      public nombreReal: string,      
      ) { 
          super( nombreReal, 'New York, USA');
    }
}

const ironman = new Heroe( 'Ironman', 45, 'Tony' );

console.log(ironman);
