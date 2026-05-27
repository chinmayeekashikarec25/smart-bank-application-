// script.js

const form = document.getElementById("bankForm");

/* Language Change Function */

function changeLanguage() {

    const language = document.getElementById("language").value;

    /* English */

    if(language === "english") {

        document.getElementById("mainHeading").innerText =
        "Smart Bank Application";

        document.getElementById("languageLabel").innerText =
        "Preferred Language";

        document.getElementById("nameLabel").innerText =
        "Customer Name";

        document.getElementById("accountLabel").innerText =
        "Account Number";

        document.getElementById("transactionLabel").innerText =
        "Transaction Type";

        document.getElementById("amountLabel").innerText =
        "Amount";

        document.getElementById("signatureText").innerHTML =
        "<strong>Customer Signature</strong>";

        document.getElementById("previewBtn").innerText =
        "Preview";

        document.getElementById("submitBtn").innerText =
        "Submit";
    }

    /* Hindi */

    else if(language === "hindi") {

        document.getElementById("mainHeading").innerText =
        "स्मार्ट बैंक एप्लिकेशन";

        document.getElementById("languageLabel").innerText =
        "पसंदीदा भाषा";

        document.getElementById("nameLabel").innerText =
        "ग्राहक का नाम";

        document.getElementById("accountLabel").innerText =
        "खाता संख्या";

        document.getElementById("transactionLabel").innerText =
        "लेन-देन प्रकार";

        document.getElementById("amountLabel").innerText =
        "राशि";

        document.getElementById("signatureText").innerHTML =
        "<strong>ग्राहक हस्ताक्षर</strong>";

        document.getElementById("previewBtn").innerText =
        "पूर्वावलोकन";

        document.getElementById("submitBtn").innerText =
        "जमा करें";
    }

    /* Kannada */

    else if(language === "kannada") {

        document.getElementById("mainHeading").innerText =
        "ಸ್ಮಾರ್ಟ್ ಬ್ಯಾಂಕ್ ಅಪ್ಲಿಕೇಶನ್";

        document.getElementById("languageLabel").innerText =
        "ಆದ್ಯತೆಯ ಭಾಷೆ";

        document.getElementById("nameLabel").innerText =
        "ಗ್ರಾಹಕರ ಹೆಸರು";

        document.getElementById("accountLabel").innerText =
        "ಖಾತೆ ಸಂಖ್ಯೆ";

        document.getElementById("transactionLabel").innerText =
        "ವಹಿವಾಟಿನ ಪ್ರಕಾರ";

        document.getElementById("amountLabel").innerText =
        "ಮೊತ್ತ";

        document.getElementById("signatureText").innerHTML =
        "<strong>ಗ್ರಾಹಕರ ಸಹಿ</strong>";

        document.getElementById("previewBtn").innerText =
        "ಮುನ್ನೋಟ";

        document.getElementById("submitBtn").innerText =
        "ಸಲ್ಲಿಸು";
    }
}

/* Preview Function */

function showPreview() {

    const name = document.getElementById("name").value;

    const accountNumber = document.getElementById("accountNumber").value;

    const transaction = document.getElementById("transaction").value;

    const amount = document.getElementById("amount").value;

    if(accountNumber.length !== 14) {

        alert("Account Number must contain exactly 14 digits");

        return;
    }

    document.getElementById("previewBox").innerHTML = `

        <h2>Preview</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Account Number:</strong> ${accountNumber}</p>

        <p><strong>Transaction:</strong> ${transaction}</p>

        <p><strong>Amount:</strong> ₹${amount}</p>

    `;
}

/* Submit */

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    const accountNumber = document.getElementById("accountNumber").value;

    const transaction = document.getElementById("transaction").value;

    const amount = document.getElementById("amount").value;

    if(accountNumber.length !== 14) {

        alert("Account Number must contain exactly 14 digits");

        return;
    }

    document.getElementById("output").innerHTML = `

        <h2>Transaction Successful</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Account Number:</strong> ${accountNumber}</p>

        <p><strong>Transaction:</strong> ${transaction}</p>

        <p><strong>Amount:</strong> ₹${amount}</p>

    `;

    form.reset();
});