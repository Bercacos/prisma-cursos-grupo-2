// Usa a pasta do próprio JavaScript como referência.
const pastaNavbar = new URL(".", import.meta.url);
const estiloNavbar = document.createElement("link");
estiloNavbar.rel = "stylesheet";
estiloNavbar.href = new URL("navbar.css", pastaNavbar).href;
document.head.appendChild(estiloNavbar);

fetch(new URL("navbar.html", pastaNavbar))
    .then(resposta => {
        if (!resposta.ok) throw new Error("Não foi possível carregar a navbar.");
        return resposta.text();
    })
    .then(html => {
        const container = document.getElementById("navbar");
        if (!container) return;
        const modelo = document.createElement("template");
        modelo.innerHTML = html;

        // Resolve os caminhos tanto na Home quanto nas páginas internas.
        modelo.content.querySelectorAll("a[href]").forEach(link => {
            link.href = new URL(link.getAttribute("href"), pastaNavbar).href;
        });
        modelo.content.querySelectorAll("img[src]").forEach(imagem => {
            imagem.src = new URL(imagem.getAttribute("src"), pastaNavbar).href;
        });
        container.replaceChildren(modelo.content);

        const navbar = container.querySelector(".navbar");
        const botaoMenu = navbar.querySelector(".navbar-toggle");
        const menu = navbar.querySelector(".navbar-menu");
        const telaCompacta = window.matchMedia("(max-width: 1100px)");

        function fecharMenu(devolverFoco = false) {
            botaoMenu.setAttribute("aria-expanded", "false");
            botaoMenu.setAttribute("aria-label", "Abrir menu de navegação");
            if (devolverFoco) botaoMenu.focus();
        }

        botaoMenu.addEventListener("click", () => {
            const aberto = botaoMenu.getAttribute("aria-expanded") === "true";
            botaoMenu.setAttribute("aria-expanded", String(!aberto));
            botaoMenu.setAttribute("aria-label", aberto
                ? "Abrir menu de navegação"
                : "Fechar menu de navegação");
        });
        menu.addEventListener("click", evento => {
            if (evento.target.closest("a")) fecharMenu();
        });
        document.addEventListener("click", evento => {
            if (!navbar.contains(evento.target)) fecharMenu();
        });
        document.addEventListener("keydown", evento => {
            if (evento.key === "Escape" && botaoMenu.getAttribute("aria-expanded") === "true") {
                fecharMenu(true);
            }
        });
        navbar.addEventListener("focusout", evento => {
            if (!navbar.contains(evento.relatedTarget)) fecharMenu();
        });
        telaCompacta.addEventListener("change", () => {
            const focoNoMenu = menu.contains(document.activeElement);
            const focoNoBotao = document.activeElement === botaoMenu;
            fecharMenu(telaCompacta.matches && focoNoMenu);
            if (!telaCompacta.matches && focoNoBotao) menu.querySelector("a").focus();
        });

        // A raiz e index.html representam a mesma página.
        const paginaAtual = window.location.pathname.replace(/\/index\.html$/, "/");
        container.querySelectorAll(".navbar-menu a").forEach(link => {
            const paginaLink = new URL(link.href).pathname.replace(/\/index\.html$/, "/");
            if (paginaLink === paginaAtual) link.setAttribute("aria-current", "page");
            else link.removeAttribute("aria-current");
        });
    })
    .catch(console.error);

// Home: <script type="module" src="./components/navbar/navbar.js"></script>
// Páginas internas: <script type="module" src="../components/navbar/navbar.js"></script>
