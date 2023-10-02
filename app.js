const autosImportados = require("./autos.js");

const concesionaria = {
  autos: autosImportados,
  buscarAuto(patente){
    return this.autos.find(auto => auto.patente === patente) || null;
  },
  venderAuto(patente){
    const auto = this.buscarAuto(patente);
    return auto ? (auto.vendido = true, auto) : null;
  },
  autosParaLaVenta(){
    return this.autos.filter(auto => auto.vendido === false);
  },
  autosNuevos(){
    return this.autosParaLaVenta().filter(auto => auto.km < 100);
  },
  listaDeVentas(){
    return this.autos.filter(auto => auto.vendido).map(auto =>{
        return auto.precio;
    })
  },
  totalDeVentas(){
    return this.listaDeVentas().reduce((acumulador, venta) => acumulador + venta, 0);
  },
  puedeComprar(auto, persona){
    return auto.precio <= persona.capacidadDePagoTotal && (auto.precio / auto.cuotas) <= persona.capacidadDePagoEnCuotas;
  },
  autosQuePuedeComprar(persona){
    return this.autosParaLaVenta().filter(auto => {
        return this.puedeComprar(auto, persona);
    });
  }
};

let persona = {
    nombre : "Juan",
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
}

console.log(concesionaria.autosQuePuedeComprar(persona));