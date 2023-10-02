const autosImportados = require("./autos.js");

const concesionaria = {
  autos: autosImportados,
  buscarAuto: function (patente) {
    let encontrado = this.autos.find((auto) => auto.patente === patente);
    if (encontrado) {
      return encontrado;
    } else {
      return null;
    }
  },
  venderAuto: function (patente) {
    let auto = this.buscarAuto(patente);
    if(auto){
        auto.vendido = true;
        return auto;
    }else{
        return null;
    }
  },
};

console.log(concesionaria.autos);

console.log(concesionaria.venderAuto("JJK116"));
console.log(concesionaria.autos);
