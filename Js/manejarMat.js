class Material {
	constructor(Nombre_mat,marca,categoria,unidadMedida){
	this.Nombre_mat=Nombre_mat;
	this.marca=marca;
	this.categoria=categoria,
	this.unidadMedida=unidadMedida;}}

function agregarMaterial(){
    let Nombre_mat = document.getElementById("nombre_mat").value
    let marca = document.getElementById("marca").value
    let categoria = document.getElementById("categoria").value
    let unidadMedida = document.getElementById("unidadmedida").value
    // console.log (Nombre_mat)
    const nuevomaterial = new Material(Nombre_mat,marca,categoria,unidadMedida)
    fetch('http://192.168.11.46/VictorApp/api/Material', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevomaterial
        )
      })
        .then(response => response.json())
        .then((d) => {
            console.log(d)
        })
        .catch(error => console.error('Unable to add item.', error));
}