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
  }
};


console.log(concesionaria.autosParaLaVenta());