
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('show-signup').addEventListener('click', (e) => {
        e.preventDefault(); 
        document.getElementById('login-form').style.display = 'none'; 
        document.getElementById('signup-form').style.display = 'block'; 
    });

    document.getElementById('show-login').addEventListener('click', (e) => {
        e.preventDefault(); 
        document.getElementById('signup-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'block'; 
    });

    document.getElementById('signupForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('signup-username').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        if (!username || !email || !password) {
            alert('All fields are required!');
            return;
        }

        if (!email.includes('@')) {
            alert('Invalid email address!');
            return;
        }

        if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some(user => user.username === username);

        if (userExists) {
            alert('Username already exists. Please choose a different one.');
        } else {
            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Sign Up successful! You can now log in.');
            document.getElementById('signupForm').reset();
            document.getElementById('signup-form').style.display = 'none';
            document.getElementById('login-form').style.display = 'block';
        }
    });

    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        if (!username || !password) {
            alert('All fields are required!');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            alert(`Login successful! Welcome, ${username}`);
            window.location.href = 'index.html'; 
        } else {
            alert('Invalid username or password.');
        }
    });
});

function goBack() {
    window.location.href = 'index.html'; 
}