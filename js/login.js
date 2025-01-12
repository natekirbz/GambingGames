const validUsername = 'user';
const validPassword = 'pass';

document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === validUsername && password === validPassword) {
        alert('Login successful!');
        // Redirect or perform other actions here
    } else {
        alert('Login failed. Please try again.');
    }
});