class Nota {
	constructor(Extra,Fecha){
    this.Extra=Extra;
	this.Fecha=Fecha;
	}}

function agregarNota(){
    let Extra = document.getElementById("Extra").value
    let Fecha = document.getElementById("Fecha").value
    // console.log (Fecha)
    const nuevaNota = new Nota(Extra,Fecha)
    fetch('http://192.168.11.46/VictorApp/api/Nota', {
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