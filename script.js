// script.js

const form = document.getElementById("bankForm");

/* Preview Function */

function showPreview() {

    const name = document.getElementById("name").value;

    const accountNumber = document.getElementById("accountNumber").value;

    const transaction = document.getElementById("transaction").value;

    const amount = document.getElementById("amount").value;

    /* Validation */

    if(accountNumber.length !== 14) {

        alert("Account Number must contain exactly 14 digits");

        return;
    }

    const previewBox = document.getElementById("previewBox");

    previewBox.innerHTML = `

        <h2>Preview</h2>

        <p><strong>Customer Name:</strong> ${name}</p>

        <p><strong>Account Number:</strong> ${accountNumber}</p>

        <p><strong>Transaction Type:</strong> ${transaction}</p>

        <p><strong>Amount:</strong> ₹${amount}</p>

    `;
}

/* Submit Function */

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    const accountNumber = document.getElementById("accountNumber").value;

    const transaction = document.getElementById("transaction").value;

    const amount = document.getElementById("amount").value;

    /* Validation */

    if(accountNumber.length !== 14) {

        alert("Account Number must contain exactly 14 digits");

        return;
    }

    const output = document.getElementById("output");

    output.innerHTML = `

        <h2>Transaction Successful</h2>

        <p><strong>Customer Name:</strong> ${name}</p>

        <p><strong>Account Number:</strong> ${accountNumber}</p>

        <p><strong>Transaction Type:</strong> ${transaction}</p>

        <p><strong>Amount:</strong> ₹${amount}</p>

    `;

    /* Reset Form */

    form.reset();
});