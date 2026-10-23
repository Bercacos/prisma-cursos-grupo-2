// Carrega o rodapé na página, do mesmo jeito que o navbar.js carrega a navbar.

// Pasta onde o rodape.js está guardado (components/rodape/)
const pastaRodape = new URL(".", import.meta.url);

// Importação do CSS (só se a página ainda não tiver o link)
const urlCss = new URL("./rodape.css", import.meta.url)
const cssJaExiste = [...document.querySelectorAll('link[rel="stylesheet"]')]
    .some(link => link.href === urlCss);

if (!cssJaExiste) {
    const estiloRodape = document.createElement("link");
    estiloRodape.rel = "stylesheet";
    estiloRodape.href = urlCss;
    document.head.appendChild(estiloRodape);
}

// Evita mexer em links externos (https://, mailto:, tel:) e âncoras (#)
const ehCaminhoRelativo = valor => !/^(?:[a-z][a-z0-9+.-]*:|#|\/\/)/i.test(valor);

// Importação do HTML do rodapé
fetch(new URL("./rodape.html", import.meta.url))
    .then(resposta => {
        if (!resposta.ok) {
            throw new Error("Não foi possível carregar o rodapé.");
        }
        return resposta.text();

    
    })
    .then(html => {
    console.log("HTML recebido pelo rodapé:", html);

    const documento = new DOMParser().parseFromString(html, "text/html");
        const rodape = documento.querySelector("footer.rodape");

        if (!rodape) {
            throw new Error('O rodape.html não tem um <footer class="rodape">.');
        }

        // Resolve os links e imagens com base na pasta do rodape.html
        rodape.querySelectorAll("a[href]").forEach(link => {
            const valor = link.getAttribute("href");
            if (ehCaminhoRelativo(valor)) {
                link.setAttribute("href", new URL(valor, pastaRodape).href);
            }
        });

        rodape.querySelectorAll("img[src]").forEach(imagem => {
            const valor = imagem.getAttribute("src");
            if (ehCaminhoRelativo(valor)) {
                imagem.setAttribute("src", new URL(valor, pastaRodape).href);
            }
        });

        const container = document.getElementById("rodape");

        if (!container) {
            throw new Error('Falta <div id="rodape"></div> na página.');
        }

        container.replaceChildren(rodape);
    })
    .catch(console.error);