document.getElementById('loginform').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    // Simple validation (for demonstration purposes)
    if (username === 'user' && password === 'password') {
        messageElement.textContent = 'Login successful!';
        messageElement.style.color = 'green';
    } else {
        messageElement.textContent = 'Invalid username or password';
        messageElement.style.color = 'red';
    }
});