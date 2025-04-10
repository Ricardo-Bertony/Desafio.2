window.addEventListener('DOMContentLoaded', function () {
    const formButton = document.querySelector('.login');
    const telefoneInput = document.getElementById('telefone');

    // Máscara automática de telefone
    telefoneInput.addEventListener('input', function () {
      let valor = telefoneInput.value.replace(/\D/g, '');
      if (valor.length > 11) valor = valor.slice(0, 11);

      if (valor.length >= 2) {
        valor = `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
      }
      if (valor.length >= 10) {
        valor = `${valor.slice(0, 10)}-${valor.slice(10)}`;
      }

      telefoneInput.value = valor;
    });

    // Funções de erro
    const showError = (inputId, message) => {
      const input = document.getElementById(inputId);
      let errorSpan = input.parentNode.querySelector('.error-message');

      if (!errorSpan) {
        errorSpan = document.createElement('span');
        errorSpan.className = 'error-message';
        errorSpan.style.color = 'red';
        errorSpan.style.fontSize = '0.8rem';
        input.parentNode.appendChild(errorSpan);
      }

      errorSpan.textContent = message;
    };

    const clearError = (inputId) => {
      const input = document.getElementById(inputId);
      const errorSpan = input.parentNode.querySelector('.error-message');
      if (errorSpan) errorSpan.textContent = '';
    };

    // Validação no clique
    formButton.addEventListener('click', function () {
      let valid = true;

      const nome = document.getElementById('nome').value.trim();
      const dataNascimento = document.getElementById('data_nascimento').value;
      const sexo = document.getElementById('sexo').value.trim();
      const email = document.getElementById('email').value.trim();
      const telefone = document.getElementById('telefone').value.trim();
      const endereco = document.getElementById('endereco').value.trim();

      //Armazenamento dos valores
      const nomeStorage = localStorage.setItem("nome", nome);
      const dataNascimentoStorage = localStorage.setItem("dataNascimento", dataNascimento);
      const sexoStorage = localStorage.setItem("sexo", sexo);
      const emailStorage = localStorage.setItem("email", email);
      const telefoneStorage = localStorage.setItem("telefone", telefone);
      const enderecoStorage = localStorage.setItem("endereco", endereco);


      const trilhaSelecionada = document.querySelector('input[name="opcao"]:checked');
      const termosAceitos = document.querySelector('.termos input[type="checkbox"]').checked;

      const telefoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Validação dos campos
      if (nome === '') {
        showError('nome', 'Nome é obrigatório.');
        valid = false;
      } else {
        clearError('nome');
      }

      if (dataNascimento === '') {
        showError('data_nascimento', 'Data de nascimento é obrigatória.');
        valid = false;
      } else {
        clearError('data_nascimento');
      }

      if (sexo === '') {
        showError('sexo', 'Sexo é obrigatório.');
        valid = false;
      } else {
        clearError('sexo');
      }

      if (!emailRegex.test(email)) {
        showError('email', 'E-mail inválido.');
        valid = false;
      } else {
        clearError('email');
      }

      if (!telefoneRegex.test(telefone)) {
        showError('telefone', 'Telefone inválido. Use o formato (99) 99999-9999.');
        valid = false;
      } else {
        clearError('telefone');
      }

      if (endereco === '') {
        showError('endereco', 'Endereço é obrigatório.');
        valid = false;
      } else {
        clearError('endereco');
      }

      if (!trilhaSelecionada) {
        alert('Selecione uma trilha de aprendizagem.');
        valid = false;
      }

      if (!termosAceitos) {
        alert('Você precisa aceitar os termos e condições.');
        valid = false;
      }

      if (valid) {
        alert('Formulário enviado com sucesso!');
        window.location.href = "mensagem.html"
      }
    });
  });