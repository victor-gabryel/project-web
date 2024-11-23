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
let carrosselIndex = [0, 0, 0];  // Um índice para cada usuário

// Função para mover o carrossel de um usuário específico
function moverCarrossel(usuarioIndex, direcao) {
    const carrossel = document.getElementById(`carrossel-${usuarioIndex}`);
    const totalCards = carrossel.children.length;

    // Atualiza o índice dependendo da direção
    if (direcao === 'next') {
        carrosselIndex[usuarioIndex] = (carrosselIndex[usuarioIndex] + 1) % totalCards;
    } else {
        carrosselIndex[usuarioIndex] = (carrosselIndex[usuarioIndex] - 1 + totalCards) % totalCards;
    }

    // Move o carrossel
    carrossel.style.transform = `translateX(-${carrosselIndex[usuarioIndex] * (250 + 10)}px)`; // 250px é o tamanho do card, 10px é o espaçamento
}








//feedback=====================================================================================================
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário
    // Obtendo os valores dos campos
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }
    // Lógica de validação de login (apenas para exemplo)
    console.log("Tentando fazer login com:", email, password);
    alert("Usuário não encontrado.");
    // Aqui você pode adicionar lógica de autenticação real com API
});
document.getElementById("forgotPassword").addEventListener("click", function() {
    alert("[ERRO...]");
});
document.getElementById("signUpLink").addEventListener("click", function() {
    alert("[ERRO...]");
});