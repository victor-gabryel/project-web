//header======================================================================================================= 
function mode(){
    let botao = document.querySelector('.botao');
    if(botao.value == "Light"){
        botao.value = "Dark";
        document.body.style.backgroundColor = "gray"; //mudar cor
    } else if(botao.value == "Dark") {
        botao.value = "Light";
        document.body.style.backgroundColor = "#141414"; //mudar cor
    }
}

function AbrirLateralMenu() {
    var menu = document.querySelector('.menu-lateral');
    var navBar = document.querySelector('.nav-bar');
    // Alterna a visibilidade do menu lateral
    menu.style.left = '0px';     // Exibe o menu
}

function FecharLateralMenu() {
    var menu = document.querySelector('.menu-lateral');
    var navBar = document.querySelector('.nav-bar');
    // Alterna a visibilidade do menu lateral
    menu.style.left = '-250px';     // Exibe o menu
}

// Fecha o menu automaticamente quando a tela for maior que 768px
window.addEventListener('resize', function() {
    var menu = document.querySelector('.menu-lateral');
    if (window.innerWidth > 768) {  // Defina a largura da tela que você deseja para fechar o menu
        menu.style.left = '-250px'; // Fecha o menu
    }
});


//index========================================================================================================









//galeria======================================================================================================
// Função para mover o carrossel
function moverCarrossel(usuarioIndex, direcao) {
    const carrossel = document.getElementById(`carrossel-${usuarioIndex}`);
    const cards = carrossel.getElementsByClassName('card');
    const numeroDeCards = cards.length;

    // Pegue o primeiro ou último cartão visível
    const cardWidth = cards[0].offsetWidth + 20; // largura de um card mais a margem
    const currentTransform = carrossel.style.transform;
    const currentPosition = currentTransform ? parseInt(currentTransform.split('(')[1].split('px')[0]) : 0;

    // Calcular o novo deslocamento (offset)
    let novoDeslocamento;
    if (direcao === 'next') {
      novoDeslocamento = currentPosition - cardWidth;
      // Se chegar ao último, ir para o primeiro
      if (Math.abs(novoDeslocamento) >= cardWidth * (numeroDeCards)) {
        novoDeslocamento = 0;
      }
    } else {
      novoDeslocamento = currentPosition + cardWidth;
      // Se voltar ao primeiro, ir para o último
      if (novoDeslocamento > 0) {
        novoDeslocamento = -(cardWidth * (numeroDeCards - 1));
      }
    }

    // Aplica a nova transformação
    carrossel.style.transform = `translateX(${novoDeslocamento}px)`;
}



//feedback=====================================================================================================
// Banco de dados simulado com um array de objetos
const bancoDeDados = [
    { email: "andreas@gmail.com", senha: "123456" },
    { email: "gabriel@gmail.com", senha: "123456" },
    { email: "victor@gmail.com", senha: "123456" }
];

// Lógica para o formulário de login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obtendo os valores dos campos
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Validação de login
    const usuario = bancoDeDados.find(user => user.email === email && user.senha === password);

    if (usuario) {
        alert("Login bem-sucedido!");
        console.log("Usuário logado:", usuario.email);
        // Aqui você pode redirecionar para outra página ou realizar outras ações
    } else {
        alert("Usuário não encontrado ou senha incorreta.");
    }
});

// Função para "Esqueci a senha"
document.getElementById("forgotPassword").addEventListener("click", function() {
    alert("Erro: Funcionalidade de recuperação de senha não implementada.");
});

// Função para "Cadastrar-se"
document.getElementById("signUpLink").addEventListener("click", function() {
    alert("Erro: Funcionalidade de cadastro não implementada.");
});