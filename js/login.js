const login = document.querySelector('#login');
const userName = document.querySelector('#login-username');
const password = document.querySelector('#login-password');
const msg= document.querySelector(".msg");

// Listen for a login event on the form
login.addEventListener('submit', onLogin);




function onLogin(e) {
    e.preventDefault();

    // Form validation
    if (userName.value === '' || password.value === '') {
        msg.innerHTML = 'ingresa usuario y contraseña';
        setTimeout(() => msg.remove() , 2000);
    } else {

        // Validate the userName and password
        if (userName.value == 'admin' && password.value == 'password') {
            window.location="menu.html";
        } else {
                alert ('contraseña o usuario incorrectos');
                
                        

        }
    }window.location.href='menu2.html';
}