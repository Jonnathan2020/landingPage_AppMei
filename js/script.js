// Função para trocar as telas do Mockup Interativo
function changeScreen(screenName) {
    // 1. Esconde todas as telas
    const screens = document.querySelectorAll('.app-screen');
    screens.forEach(screen => screen.classList.remove('active'));

    // 2. Mostra a tela selecionada
    const activeScreen = document.getElementById('app-' + screenName);
    if (activeScreen) {
        activeScreen.classList.add('active');
    }

    // 3. Atualiza a cor do ícone na navbar do app
    const navItems = document.querySelectorAll('.app-nav-item');
    navItems.forEach(item => item.classList.remove('active'));

    const activeNavItem = document.querySelector(`.app-nav-item[data-target="${screenName}"]`);
    if (activeNavItem) {
        activeNavItem.classList.add('active');
    }

    // 4. Reseta o scroll para o topo ao trocar de tela
    const screenContent = document.querySelector('.screen-content');
    if (screenContent) {
        screenContent.scrollTop = 0;
    }
}

// Efeito suave no scroll da página para os links da navbar principal
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});