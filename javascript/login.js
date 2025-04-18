const formularioLogin = document.querySelector('#formulario-login');
const mensagemSenha = document.querySelector('.mensagem1');
formularioLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const senhaDigitada = document.getElementById('campo-senha').value;
    const usuario = document.getElementById('campo-cpf').value;
    const senhaArmazenada = localStorage.getItem("senhaArmazenada");
    const usuarioArmazenado = localStorage.getItem("usuarioArmazenado", usuario);
    
    if (senhaDigitada === senhaArmazenada && usuarioArmazenado === usuario) {
        alert("Login bem-sucedido! ✅");
        window.location.href = "formulario.html";
    } 
    if(senhaDigitada != senhaArmazenada || usuarioArmazenado != usuario ) {
        alert("Usuário e/ou Senha incorreto(s)! ❌");
        mensagemSenha.style.display = 'block';
    } 

    document.getElementById('campo-senha').value = "";
});