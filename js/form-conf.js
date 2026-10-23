console.log('JS carregou');

const form = document.getElementById('form-contato');
const confirmacao = document.getElementById('confirmacao');

form.addEventListener('submit', function (e) {
    e.preventDefault();                       // impede a página de recarregar
    confirmacao.classList.add('ativa');       // sobe a imagem
    form.reset();                             // limpa os campos

    setTimeout(function () {
        confirmacao.classList.remove('ativa'); // desce depois de 4s
    }, 4000);
});