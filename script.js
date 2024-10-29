document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the email and password values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Basic validation (you can add more advanced validation)
    if (email && password) {
        // Redirect to the product page
        window.location.href = "product.html";
    } else {
        alert("Please enter both email and password.");
    }
});