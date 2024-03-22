function onSubmit() {
    var emailInput = document.getElementById("email").value;
    if (emailInput.trim() === "") {
        alert("Please enter a valid email address.");
        return false;
    }
    alert("Thank you for subscribing!");
    return true;
}

    
