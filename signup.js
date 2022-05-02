const form = document.getElementsByTagName('form')[0];
    const password = document.getElementById('password');
    const passwordError = document.querySelector('#password + span.error');
    password.addEventListener('input', e => {
        if (password.validity.valid) {
            passwordError.textContent = '';
            passwordError.className = 'error';
        }
        else {
            showError();
        }
    });
form.addEventListener('submit', e => {
        if(!password.validity.valid) {
            showError();
            e.preventDefault();
        }
    });
function showError() {
        if (password.validity.valueMissing) {
            passwordError.textContent = 'You need to enter a password.';
            passwordError.className = 'error active'
        }
    }
    // old js / slightly different tactic
    // form.addEventListener('submit', e => {
    //     const password = document.querySelector('#password');
    //     const confpassword = document.querySelector('#passwordconf');
    //     const error = document.querySelector('.error-msg');
    //     if (password !== confpassword) {
    //         e.preventDefault();
    //         password.classList.add('error');
    //         confpassword.classList.add('error');
    //         error.style.display = 'block';
    //     }
    // });