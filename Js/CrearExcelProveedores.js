async function GenerarExcel(){
    const uri = 'http://192.168.11.46/VictorApp/api/';
    let worbook = XLSX.utils.book_new();
    const response = await fetch(uri + 'Proveedor');
    const data = await response.json();
    let worsheet = XLSX.utils.json_to_sheet(data);
    worbook.SheetNames.push("Test");
    worbook.Sheets["Test"] = worsheet;
    return XLSX.writeFile(worbook, "Proveedores.xlsx");
}
