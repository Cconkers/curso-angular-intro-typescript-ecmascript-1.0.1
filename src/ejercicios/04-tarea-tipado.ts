/*
    ===== Código de TypeScript =====
*/

interface SuperHeroe {
  nombre: string;
  edad: number;
  direccion: Direccion;
  mostrarDireccion: () => string;
}

interface Direccion {
  calle: "Main St";
  pais: "USA";
  ciudad: "NY";
}

const superHeroe: SuperHeroe = {
  nombre: "Spiderman",
  edad: 30,
  direccion: {
    calle: "Main St",
    pais: "USA",
    ciudad: "NY",
  },
  mostrarDireccion() {
    return (
      this.nombre + ", " + this.direccion.calle + ", " + this.direccion.pais
    );
  },
};

console.log(superHeroe.mostrarDireccion());
