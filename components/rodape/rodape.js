// 1. Carrega o CSS do rodapé se ainda não existir
const urlCss = new URL("./rodape.css", import.meta.url).href;
const cssJaExiste = [...document.querySelectorAll('link[rel="stylesheet"]')]
    .some(link => link.href === urlCss);

if (!cssJaExiste) {
    const estiloRodape = document.createElement("link");
    estiloRodape.rel = "stylesheet";
    estiloRodape.href = urlCss;
    document.head.appendChild(estiloRodape);
}

// 2. HTML do rodapé incorporado diretamente
const htmlRodape = `
    <footer class="rodape">
        <div class="rodape-container">
            <div class="coluna-logo">
                <img src="../assets/icons/logo-prisma-fundo.png" alt="Logo Prisma Cursos" class="logo-rodape">
                <p class="nome-marca">Prisma Cursos</p>
            </div>

            <div class="coluna-links">
                <h3 class="titulo-coluna">Cursos</h3>
                <ul>
                    <li><a href="curso-marketing.html" class="link-marketing-digital">Marketing Digital</a></li>
                    <li><a href="curso-empreendedorismo.html" class="link-empreendedorismo">Empreendedorismo</a></li>
                    <li><a href="curso-python.html" class="link-python">Python</a></li>
                    <li><a href="curso-after-effects.html" class="link-after-effects">After Effects</a></li>
                    <li><a href="curso-gestao.html" class="link-gestao-de-projetos">Gestão de projetos</a></li>
                </ul>
            </div>

            <div class="coluna-links">
                <h3 class="titulo-coluna">Navegação</h3>
                <ul>
                    <li><a href="../index.html" class="link-inicio">Início</a></li>
                    <li><a href="cursos.html" class="link-cursos">Cursos</a></li>
                    <li><a href="quem-somos.html" class="link-quem-somos">Quem somos</a></li>
                    <li><a href="formulario.html" class="link-contato">Contato</a></li>
                    <li><a href="depoimentos.html" class="link-feedbacks">Feedbacks</a></li>
                </ul>
            </div>

            <div class="coluna-comunicacao">
                <h3 class="titulo-coluna">Comunicações</h3>
                <ul>
                    <li>
                        <a href="mailto:prisma_cursos@gmail.com" class="link-email">
                            <img src="../assets/icons/Email_Icon.png" alt="" class="icone-rodape">
                            prisma_cursos<br class="quebra-mobile">@gmail.com
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/5512123456789" target="_blank" rel="noopener noreferrer" class="link-whatsapp">
                            <img src="../assets/icons/WhatsApp_Icon.png" alt="" class="icone-rodape">
                            (12) 12345-6789
                        </a>
                    </li>
                    <li>
                        <a href="formulario.html" class="link-formulario">
                            <img src="../assets/icons/Garra_icon.png" alt="" class="icone-rodape">
                            Formulário
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
`;

// 3. Renderiza o rodapé na div container assim que o DOM estiver pronto
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("rodape");
    if (container) {
        container.innerHTML = htmlRodape;
    }
});