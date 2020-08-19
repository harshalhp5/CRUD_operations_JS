
function onSubmit() {
    var formData = readFormData();
    insertData(formData);

}

function readFormData () {
    var formData = {};
    formData["stateName"] = document.getElementById("stateName").value;
    formData["activeCases"] = document.getElementById("activeCases").value;
    formData["recCases"] = document.getElementById("recCases").value;
    formData["totCases"] = document.getElementById("totCases").value;
    return formData;
    
}

function insertData(data) {
    var table = document.getElementById("tableData").getElementsByTagName('tbody')[0];
    
    var newRow = table.insertRow(table.length);
    
    cell0 = newRow.insertCell(0);
    cell0.innerHTML = data.stateName;

    cell1 = newRow.insertCell(1);
    cell1.innerHTML = data.activeCases;
    
    cell2 = newRow.insertCell(2);
    cell2.innerHTML = data.recCases;
    
    cell3 = newRow.insertCell(3);
    cell3.innerHTML = data.totCases;
    
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<input type = "button" value = "Edit" onClick = "onEdit(this)">`;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<input type = "button" value = "Delete" onClick = "onDelete(this)">`;
    
}