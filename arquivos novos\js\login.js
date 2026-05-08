document.addEventListener('DOMContentLoaded', () => {
    
    // --- ELEMENTOS DA INTERFACE ---
    const formLogin = document.getElementById('form-login');
    const formRegister = document.getElementById('form-register');
    const formForgot = document.getElementById('form-forgot');
    
    const linkRegister = document.getElementById('link-register');
    const linkLogin = document.getElementById('link-login');
    const linkForgot = document.querySelector('.forgot-password');
    const linkBackLogin = document.getElementById('link-back-login');
    
    const subtitle = document.getElementById('auth-subtitle');

    // --- FUNÇÃO PARA ALTERNAR TELAS ---
    function trocarTela(formSaindo, formEntrando, novoSubtitulo) {
        formSaindo.classList.remove('active');
        setTimeout(() => {
            formSaindo.style.display = 'none';
            formEntrando.style.display = 'block';
            setTimeout(() => formEntrando.classList.add('active'), 50);
            subtitle.innerText = novoSubtitulo;
        }, 400);
    }

    // Navegação entre Login e Registro
    linkRegister.addEventListener('click', (e) => {
        e.preventDefault();
        trocarTela(formLogin, formRegister, "Crie sua conta para começar");
    });

    linkLogin.addEventListener('click', (e) => {
        e.preventDefault();
        trocarTela(formRegister, formLogin, "Bem-vindo de volta!");
    });

    // Navegação para Esqueci a Senha
    linkForgot.addEventListener('click', (e) => {
        e.preventDefault();
        trocarTela(formLogin, formForgot, "Recuperar Senha");
    });

    // Voltar do Esqueci a Senha para o Login
    linkBackLogin.addEventListener('click', (e) => {
        e.preventDefault();
        trocarTela(formForgot, formLogin, "Bem-vindo de volta!");
    });

    // --- MOSTRAR/ESCONDER SENHA ---
    const toggleIcons = document.querySelectorAll('.toggle-password');
    toggleIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const input = this.previousElementSibling;
            if (input.type === 'password') {
                input.type = 'text';
                this.classList.remove('fa-eye');
                this.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                this.classList.remove('fa-eye-slash');
                this.classList.add('fa-eye');
            }
        });
    });

    // --- VALIDAÇÃO E SIMULAÇÃO DE ENVIO ---
    function validarEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function setErro(input, isErro) {
        const grupo = input.parentElement;
        if (isErro) {
            grupo.classList.add('invalid');
        } else {
            grupo.classList.remove('invalid');
        }
    }

    function simularCarregamento(botao, mensagemSucesso) {
        botao.classList.add('loading');
        setTimeout(() => {
            botao.classList.remove('loading');
            alert(mensagemSucesso);
        }, 2000);
    }

    // Submit: Login
    formLogin.addEventListener('submit', (e) => {
        e.preventDefault();
        let valido = true;
        const email = document.getElementById('login-email');
        const senha = document.getElementById('login-senha');

        if (!validarEmail(email.value)) { setErro(email, true); valido = false; } else { setErro(email, false); }
        if (senha.value.length < 6) { setErro(senha, true); valido = false; } else { setErro(senha, false); }

        if (valido) simularCarregamento(document.getElementById('btn-login'), 'Autenticação realizada com sucesso!');
    });

    // Submit: Registro
    formRegister.addEventListener('submit', (e) => {
        e.preventDefault();
        let valido = true;
        const email = document.getElementById('reg-email');
        const senha = document.getElementById('reg-senha');
        const confSenha = document.getElementById('reg-conf-senha');

        if (!validarEmail(email.value)) { setErro(email, true); valido = false; } else { setErro(email, false); }
        if (senha.value.length < 6) { setErro(senha, true); valido = false; } else { setErro(senha, false); }
        if (senha.value !== confSenha.value || confSenha.value === '') { setErro(confSenha, true); valido = false; } else { setErro(confSenha, false); }

        if (valido) simularCarregamento(document.getElementById('btn-register'), 'Conta criada com sucesso!');
    });

    // Submit: Esqueci a Senha
    formForgot.addEventListener('submit', (e) => {
        e.preventDefault();
        let valido = true;
        const email = document.getElementById('forgot-email');

        if (!validarEmail(email.value)) { setErro(email, true); valido = false; } else { setErro(email, false); }

        if (valido) simularCarregamento(document.getElementById('btn-forgot'), 'Se o e-mail estiver cadastrado, você receberá um link de recuperação em instantes.');
    });
});