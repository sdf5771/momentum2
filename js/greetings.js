const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden'; // hidden class name
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); // input username in localstorage.
    paintGreetings(username);
    
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username} !`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    // There is no user , show the form.
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm1 = addEventListener('submit', onLoginSubmit);
} else {
    // user , show the greeting
    paintGreetings(savedUsername);

}