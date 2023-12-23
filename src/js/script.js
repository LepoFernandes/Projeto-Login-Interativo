var btnLogin = window.document.querySelector(".wrap #login-btn"); 
var btnCadastro = window.document.querySelector("#cadastro");
var body = window.document.querySelector("body");

btnLogin.addEventListener("click", function(){
    body.className = "sign-in-js"
});

btnCadastro.addEventListener("click", function(){
    body.className = "sign-up-js"
});