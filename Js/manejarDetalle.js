const crearDetalleNota = document.getElementById('crearDetalleNota'); // id del formulario

crearDetalleNota.addEventListener('submit', function (e) {
    e.preventDefault();
//paso de parametros a ocupar para la tabla
    const cantidad = document.getElementById('cantidad').value;
    const precio = document.getElementById('precio').value;
    const extra = document.getElementById('extra').value;
    const selectMateriales = document.getElementById('selectMateriales').value;
    const selectNota = document.getElementById('selectNota').value;
    const selectObras = document.getElementById('selectObras').value;
    const selectProvee = document.getElementById('selectProvee').value;
 //validacion de datos
    if (cantidad == '' || precio == '' || extra == '' || selectMateriales == '' || selectNota == '' || selectObras == '' || selectProvee == '') {
        return
    }
//pasar datos de la api
    const data = {
        Obra: Number(selectObras),
        Prove: Number(selectProvee),
        material: Number(selectMateriales),
        id_Nota: Number(selectNota),
        Cantidad: Number(cantidad),
        PrecioUnitario: parseFloat(precio),
        Extra: extra
    }
    

    fetch(uri + "Detalles", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })//si es correcto se agrega nuestro detalle nota
        .then(res => res.json())
        .then(data => {
            console.log(data)
            
            crearDetalleNota.reset()
        })
});


const uri = 'http://192.168.11.46/VictorApp/api/'; // url de la api

// funcion para hacer peticiones a la api
async function peticiones(uriMetodo) { 
    const response = await fetch(uri + uriMetodo)
    const data = await response.json()
    return data
}
// llenar el select de obras con los datos de la api
function LlenarSelectObras() { 
    const select = document.getElementById('selectObras');
    peticiones('Datos')
        .then(data => {                                          
            data.forEach(element => {
                const option = document.createElement('option');
                option.text = element.NombreObra;
                option.value = element.id_Obra;
                select.add(option);
                
            })
        })
        .catch(error => console.log(error))
}
//llenar el select de proveedores con los datos de la api
function LlenarSelectProvee() {
    const select = document.getElementById('selectProvee');
    peticiones('Proveedor')
        .then(data => {
            data.forEach(element => {
                const option = document.createElement('option');
                option.text = element.RazonSoc;
                option.value = element.id_Proveedor;
                
                select.add(option);
            })
        })
        .catch(error => console.log(error))
}

//llenar el select de materiales con los datos de la api
function LlenarMateriales() {
    const selectM = document.getElementById('selectMateriales');
    peticiones('Material')
        .then(data => {
            data.forEach(element => {
                const option = document.createElement('option');
                option.text = element.Nombre_Mat;
                option.value = element.id_Material;
                selectM.appendChild(option);
            })
        })
        .catch(error => console.log(error))
}

//llenar el select de nota con los datos de la api
function LlenarNota() {
    const selectM = document.getElementById('selectNota');
    peticiones('Nota')
        .then(data => {
            data.forEach(element => {
                const option = document.createElement('option');
                option.text = element.Fecha + ' ' + element.Extra;
                option.value = element.id_Nota;
                
                selectM.appendChild(option);
            })
        })
        .catch(error => console.log(error))
}
//lamar nuestras funciones acceso
function main() {
    LlenarSelectObras()
    LlenarSelectProvee()
    LlenarMateriales()
    LlenarNota()
}


main();
