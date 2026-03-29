const container = document.querySelector('.container');
const register = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

register.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {    
    container.classList.remove('active');
});