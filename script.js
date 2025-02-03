document.getElementById("transaction-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    let amount = document.getElementById("amount").value;
    let category = document.getElementById("category").value;
    let date = document.getElementById("date").value;
    let type = document.querySelector('input[name="type"]:checked').value;

    // Create a new row
    let table = document.getElementById("transaction-table");
    let newRow = table.insertRow();

    newRow.innerHTML = `
        <td>${amount}</td>
        <td>${category}</td>
        <td>${date}</td>
        <td>${type}</td>
    `;

    // Reset form
    document.getElementById("transaction-form").reset();
});
