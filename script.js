const logregbox = document.querySelector('.logreg-box');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');

registerlink.addEventListener('click', () => {
    logregbox.classList.add('active');
});

loginlink.addEventListener('click', () => {
    logregbox.classList.remove('active');
});

function validateForm() {
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    if (!name || !email || !password) {
        alert('Email and password are required');
        return false;
    }

    if (!validateEmail(email)) {
        alert('Invalid email format');
        return false;
    }

    return true;
}

document.querySelector('btn1').addEventListener('click', () => {
    if (validateForm()) {
        window.open('.form-box login', '_blank');
    }
});

/*document.querySelector('btn').addEventListener('click', () => {
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    if (!email || !password) {
        alert('Email and password are required');
        return;
    }

    if (!validateEmail(email)) {
        alert('Invalid email format');
        return;
    }

    window.open('signin.html', '_blank');
});

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}*/

