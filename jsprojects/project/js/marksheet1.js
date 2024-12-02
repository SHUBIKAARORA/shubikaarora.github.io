// add new row
function addSubject() {
    var table = document.getElementById("table1").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);

    var cell1 = newRow.insertCell(0);
    var subjectNameInput = document.createElement("input");
    subjectNameInput.type = "text";
    subjectNameInput.placeholder = "Enter subject name";
    subjectNameInput.className = "subject";
    cell1.appendChild(subjectNameInput);

    var cell2 = newRow.insertCell(1);
    var scoredMarksInput = document.createElement("input");
    scoredMarksInput.type = "number";
    scoredMarksInput.placeholder = "Scored marks";
    scoredMarksInput.className = "marks";
    cell2.appendChild(scoredMarksInput);

    var cell3 = newRow.insertCell(2);
    var totalMarksInput = document.createElement("input");
    totalMarksInput.type = "number";
    totalMarksInput.placeholder = "Total marks";
    totalMarksInput.className = "totalmarks";
    cell3.appendChild(totalMarksInput);

    var cell4 = newRow.insertCell(3);
    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.className = "myclass";
    deleteBtn.onclick = function() {
        deleterow(newRow); // Pass newRow to deleteRow function
    };
    cell4.appendChild(deleteBtn);
}
// delete a row
function deleterow(row) {
    var table = document.getElementById("table1").getElementsByTagName('tbody')[0];
    table.deleteRow(row.rowIndex - 1);
}
// to find the percentages
function result() {
    const rows = document.querySelectorAll("#table1 tbody tr");
    let totalObtained = 0;
    let totalPossible = 0;

    rows.forEach(row => {
        const marks = parseFloat(row.querySelector(".marks").value) || 0;
        const totalMarks = parseFloat(row.querySelector(".totalmarks").value) || 0;
        totalObtained += marks;
        totalPossible += totalMarks;
    });

    const percentage = (totalObtained / totalPossible) * 100 ;
    const grade = getGrade(percentage);
    function getGrade(percentage) {
        if (percentage >= 90) return 'A';
        if (percentage >= 80) return 'B';
        if (percentage >= 70) return 'C';
        if (percentage >= 60) return 'D';
        if (percentage >= 50) return 'E';
        return 'F';
    }
    // display the div and result
    document.getElementById("two").setAttribute('style','display:block;');
    document.getElementById('totalObtained').innerHTML = totalObtained;
    document.getElementById('totalPossible').innerHTML = totalPossible;
    document.getElementById('percentage').innerHTML = `${percentage.toFixed(2)}%`;
    document.getElementById('grade').innerHTML = grade;
}