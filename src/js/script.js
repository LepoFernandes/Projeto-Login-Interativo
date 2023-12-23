document.addEventListener("DOMContentLoaded", function() {

    var btnLogin = document.getElementById("login-btn");
    var btnCadastro = document.getElementById("cadastro");
    var body = document.querySelector("body");

    btnLogin.addEventListener("click", function() {
        body.className = "sign-in-js";
    });

    btnCadastro.addEventListener("click", function() {
        body.className = "sign-up-js";
    });

 
    var btnNormalLogin = document.getElementById("buttonnormal");
    btnNormalLogin.addEventListener("click", function() {
        
        console.log("Botão de login normal clicado");
    });
});
