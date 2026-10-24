
 // Pasta onde está o rodape.js
const pastaRodape = new URL(".", import.meta.url);

// Carrega o CSS do rodapé.
const urlCss = new URL("rodape.css", pastaRodape).href;

if (![...document.querySelectorAll('link[rel="stylesheet"]')]
    .some(link => link.href === urlCss)) {

    const estilo = document.createElement("link");
    estilo.rel = "stylesheet";
    estilo.href = urlCss;
    document.head.appendChild(estilo);
}

// Busca o HTML do rodapé.
fetch(new URL("rodape.html", pastaRodape))
    .then(resposta => {
        if (!resposta.ok) {
            throw new Error("Erro ao carregar rodape.html");
        }

        return resposta.text();
    })
    .then(html => {
        const modelo = document.createElement("template");
        modelo.innerHTML = html;

        const rodape = modelo.content.querySelector("footer.rodape");

        if (!rodape) {
            throw new Error("Elemento footer.rodape não encontrado.");
        }

        // Referência à pasta pages, onde os links originais
        // do rodape.html foram definidos.
        const pastaPages = new URL("../../pages/", pastaRodape);

        // Corrige os links internos.
        rodape.querySelectorAll("a[href]").forEach(link => {
            const caminho = link.getAttribute("href");
            link.href = new URL(caminho, pastaPages).href;
        });

        // Corrige os caminhos das imagens.
        rodape.querySelectorAll("img[src]").forEach(imagem => {
            const caminho = imagem.getAttribute("src");
            imagem.src = new URL(caminho, pastaPages).href;
        });

        // Insere o rodapé no container.
        const container = document.getElementById("rodape");

        if (!container) {
            throw new Error("Container #rodape não encontrado.");
        }

        container.replaceChildren(rodape);

        // Identifica a página atual.
        const paginaAtual = window.location.pathname.replace(
            /\/index\.html$/,
            "/"
        );

        rodape.querySelectorAll("a[href]").forEach(link => {
            const urlLink = new URL(link.href);

            if (urlLink.origin !== window.location.origin) {
                return;
            }

            const paginaLink = urlLink.pathname.replace(
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
    .catch(erro => {
        console.error("Erro no rodapé:", erro);
    });
