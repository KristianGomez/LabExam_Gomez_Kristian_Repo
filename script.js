function validateForm() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("errorMsg");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "" || password === "") {
        errorMsg.textContent = "Both fields are required.";
        return false;
    }

    if (!emailPattern.test(email)) {
        errorMsg.textContent = "Please enter a valid email address.";
        return false;
    }

    if (email !== "kristiangomez@gmail.com" || password !== "password") {
        errorMsg.textContent = "Invalid email or password.";
        return false;
    }

    return true;
}
