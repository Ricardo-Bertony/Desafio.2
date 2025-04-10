const formularioRegistro = document.querySelector('#formulario-registro');
const mensagemSenha = document.querySelector('.mensagem1'); 
formularioRegistro.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const usuario = document.getElementById('campo-usuario').value;
    const senhaDigitada = document.getElementById('campo-senha').value;
   
    
    if (!/^\d{11}$/.test(usuario) || senhaDigitada.length < 8) {
        if (!/^\d{11}$/.test(usuario)) {
            alert("CPF deve conter exatamente 11 dígitos numéricos!");
            mensagemSenha.style.display = 'block';
        }
        
        if (senhaDigitada.length < 8) {
            alert("A senha deve ter pelo menos 8 caracteres!");
            mensagemSenha.style.display = 'block';
        }
    } else {
        localStorage.setItem("senhaArmazenada", senhaDigitada);
        localStorage.setItem("usuarioArmazenado", usuario);
        document.getElementById('campo-senha').value = "";
        alert("Cadastro realizado! ✅");
        window.location.href = "index.html";
    }
    
    
    localStorage.setItem("senhaArmazenada", senhaDigitada);
    localStorage.setItem("usuarioArmazenado", usuario);
    
    document.getElementById('campo-senha').value = "";
});