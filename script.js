// Script para interatividade do projeto Aline

// Função para suavizar scroll ao clicar nos links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Função para validar e enviar formulário
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Obrigado pela mensagem! Em breve entraremos em contato.');
        form.reset();
    });
}

// Função para botão "Começar Agora"
const btn = document.querySelector('.btn');
if (btn) {
    btn.addEventListener('click', function () {
        alert('Bem-vindo! Que tal explorar mais o projeto?');
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

console.log('Aline - Projeto Web carregado com sucesso!');