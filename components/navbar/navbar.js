// Usa a pasta do próprio JavaScript como referência.
const pastaNavbar = new URL(".", import.meta.url);

// Importação do CSS.
const estiloNavbar = document.createElement("link");
estiloNavbar.rel = "stylesheet";
estiloNavbar.href = new URL("navbar.css", pastaNavbar).href;
document.head.appendChild(estiloNavbar);

// Importação do HTML.
fetch(new URL("navbar.html", pastaNavbar))
    .then(resposta => {
        if (!resposta.ok) {
            throw new Error("Não foi possível carregar a navbar.");
        }

        return resposta.text();
    })
    .then(html => {
        // Prepara o HTML antes de inseri-lo na página.
        const modelo = document.createElement("template");
        modelo.innerHTML = html;

        // Resolve os links a partir da pasta da navbar.
        modelo.content.querySelectorAll("a[href]").forEach(link => {
            link.href = new URL(
                link.getAttribute("href"),
                pastaNavbar
            ).href;
        });

        // Resolve o caminho da imagem pela mesma referência.
        modelo.content.querySelectorAll("img[src]").forEach(imagem => {
            imagem.src = new URL(
                imagem.getAttribute("src"),
                pastaNavbar
            ).href;
        });

        const container = document.getElementById("navbar");
        container.replaceChildren(modelo.content);

        // Considera a raiz e index.html como a mesma página.
        const paginaAtual = window.location.pathname.replace(
            /\/index\.html$/,
            "/"
        );

        const links = container.querySelectorAll(".navbar-menu a");

        links.forEach(link => {
            const paginaLink = new URL(link.href).pathname.replace(
                /\/index\.html$/,
                "/"
            );

            if (paginaLink === paginaAtual) {
                link.setAttribute("aria-current", "page");
            } else {
                link.removeAttribute("aria-current");
            }
        });
    })
    .catch(console.error);



    // Use no index <script type="module" src="./components/navbar/navbar.js"></script>
    // Use nos pages <script type="module" src="../components/navbar/navbar.js"></script>