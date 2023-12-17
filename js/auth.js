document.addEventListener('DOMContentLoaded', function () {
    const loginLink = document.querySelector('.singIn');
    const registerLink = document.querySelector('.register');
    const logoutButton = document.querySelector('.logout');

    // Проверяем, вошел ли пользователь
    const userLoggedIn = localStorage.getItem('accessToken'); // или sessionStorage

    if (userLoggedIn) {
        // Если пользователь вошел, скрываем ссылки входа и регистрации, показываем кнопку выхода
        loginLink.style.display = 'none';
        registerLink.style.display = 'none';
        logoutButton.style.display = 'block';
    } else {
        // Если пользователь не вошел, показываем ссылки входа и регистрации, скрываем кнопку выхода
        loginLink.style.display = 'block';
        registerLink.style.display = 'block';
        logoutButton.style.display = 'none';
    }
});


document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let login = document.querySelector('[name="login"]').value;
    let password = document.querySelector('[name="password"]').value;
    console.log(JSON.stringify({login: login, password: password}));
    fetch('http://localhost:8080/api/v1/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({login: login, password: password})
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Неправильный логин или пароль!');
            }
            return response.json();
        })
        .then(data => {
            const accessToken = data.accessToken;
            localStorage.setItem('accessToken', accessToken);
            window.location.reload();
        }).catch(error => {
        document.getElementById('error-message').textContent = error.message;
    });
});


const logoutButton = document.querySelector('.logout');
logoutButton.addEventListener('click', () => {
    localStorage.removeItem('accessToken');
    window.location.reload();
})
