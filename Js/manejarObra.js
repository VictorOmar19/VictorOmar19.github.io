class Obra {
	constructor(NombreObra,Direccion,FechaIni,FechaFin,Duenio,Responsable,Tel_resp,Correo_res){
	this.NombreObra=NombreObra;
	this.Direccion=Direccion;
	this.FechaIni=FechaIni,
	this.FechaFin=FechaFin; 
    this.Duenio=Duenio;
    this.Responsable=Responsable;
    this.Tel_resp=Tel_resp;
    this.Correo_res=Correo_res; }}

function agregarObra(){
    let NombreObra = document.getElementById("NombreObra").value
    let Direccion = document.getElementById("Direccion").value
    let FechaIni = document.getElementById("FechaIni").value
    let FechaFin = document.getElementById("FechaFin").value
    let Duenio = document.getElementById("Duenio").value
    let Responsable = document.getElementById("Responsable").value
    let Tel_resp = document.getElementById("Tel_resp").value
    let Correo_res = document.getElementById("Correo_res").value
    // console.log (NombreObra)
    const nuevaObra = new Obra(NombreObra,Direccion,FechaIni,FechaFin,Duenio,Responsable,Tel_resp,Correo_res)
    fetch('http://192.168.11.46/VictorApp/api/Datos', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevaObra
        )
      })
        .then(response => response.json())
        .then((d) => {
            console.log(d)
        })
        .catch(error => console.error('Unable to add item.', error));
}