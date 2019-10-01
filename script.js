var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["nombreCivil"] = document.getElementById("nombreCivil").value;
    formData["nombreArt"] = document.getElementById("nombreArt").value;
    formData["direccion"] = document.getElementById("direccion").value;
    formData["ciudad"] = document.getElementById("ciudad").value;
    formData["telefono"] = document.getElementById("telefono").value;
    formData["email"] = document.getElementById("email").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("listaMusicos").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nombreCivil;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.nombreArt;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.direccion;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.ciudad;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.telefono;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.email;
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("nombreCivil").value = "";
    document.getElementById("nombreArt").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById("ciudad").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("email").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nombreCivil").value = selectedRow.cells[0].innerHTML;
    document.getElementById("nombreArt").value = selectedRow.cells[1].innerHTML;
    document.getElementById("direccion").value = selectedRow.cells[2].innerHTML;
    document.getElementById("ciudad").value = selectedRow.cells[3].innerHTML;
    document.getElementById("telefono").value = selectedRow.cells[4].innerHTML;
    document.getElementById("email").value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.nombreCivil;
    selectedRow.cells[1].innerHTML = formData.nombreArt;
    selectedRow.cells[2].innerHTML = formData.direccion;
    selectedRow.cells[3].innerHTML = formData.ciudad;
    selectedRow.cells[4].innerHTML = formData.telefono;
    selectedRow.cells[5].innerHTML = formData.email;
}

function onDelete(td) {
    if (confirm('¿Estás seguro de eliminar?')) {
        row = td.parentElement.parentElement;
        document.getElementById("listaMusicos").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("nombreCivil").value == "") {
        isValid = false;
        document.getElementById("nombreCivil1").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("nombreCivil1").classList.contains("hide"))
            document.getElementById("nombreCivil1").classList.add("hide");
    }
    return isValid;
}