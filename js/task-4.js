const form = document.querySelector('.login-form')

//const dataEvents = {login: undefined, password: undefined}
const dataEvents = {};
form.addEventListener('submit', submitFoo);
function submitFoo(event){
    event.preventDefault();
    const form = event.target;
    const login = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    if (login === '' || password === ''){
        alert('All form fields must be filled in');
        return;
    }
    dataEvents.login = login;
    dataEvents.password = password;
    console.log(`Login is: ${dataEvents.login}, Password is: ${dataEvents.password}`)
    form.reset();
}


