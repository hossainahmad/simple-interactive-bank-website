document.getElementById('login-submit').addEventListener('click', function () {
    // Get users email address
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    // Get Users password
    const passField = document.getElementById('user-password');
    const userPass = passField.value;

    // Check users email and password

    if (userEmail == 'john@demo.com' && userPass == 'secret') {
        window.location.href = 'banking.html';
    }
    else {
        alert('Enter a valid email or password');
    }
});