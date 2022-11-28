class Proveedor {
	constructor(Agente,Correo,Direccion,RazonSoc,Telefono,TIpoMaterial){
    this.Agente=Agente;
	this.Correo=Correo;
    this.Direccion=Direccion;
    this.RazonSoc=RazonSoc;
    this.Telefono=Telefono;
    this.TIpoMaterial=TIpoMaterial;
	}}

function agregarProveedor(){
    let Agente = document.getElementById("Agente").value
    let Correo = document.getElementById("Correo").value
    let Direccion = document.getElementById("Direccion").value
    let RazonSoc = document.getElementById("RazonSoc").value
    let Telefono = document.getElementById("Telefono").value
    let TIpoMaterial = document.getElementById("TipoMaterial").value
    // console.log (Correo)
    const nuevaNota = new Proveedor(Agente,Correo,Direccion,RazonSoc,Telefono,TIpoMaterial)
    fetch('http://192.168.11.46/VictorApp/api/Proveedor', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevaNota
        )
      })
        .then(response => response.json())
        .then((d) => {
            console.log(d)
        })
        .catch(error => console.error('Unable to add item.', error));
}