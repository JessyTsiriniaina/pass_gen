
function generate_password() {
    password = "";
    char = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*-_";

    size = Math.floor(Math.random()*(20 - 10)) + 10;

    for (let index = 0; index < size; index++) {
        
        position = Math.floor(Math.random() * char.length);
        password = password.concat(char[position]);
    }

    document.getElementById('displayer').innerHTML = password;
}

caller = document.getElementById('caller');
caller.addEventListener("click", generate_password);