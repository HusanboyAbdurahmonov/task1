const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active"); // "active" class qo‘shiladi
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active"); // "active" class olib tashlanadi
});
