import { quizzes } from "../../js/perguntas-quiz.js";

const pastaQuiz = new URL(".", import.meta.url);
const botoes = document.querySelectorAll("[data-quiz]");

async function iniciarQuiz() {
    const container = document.getElementById("quiz");
    if (!container || botoes.length === 0) return;

    const estilo = document.createElement("link");
    estilo.rel = "stylesheet";
    estilo.href = new URL("quiz.css", pastaQuiz).href;
    document.head.appendChild(estilo);

    const resposta = await fetch(new URL("quiz.html", pastaQuiz));
    if (!resposta.ok) throw new Error("Não foi possível carregar o quiz.");
    container.innerHTML = await resposta.text();

    const dialog = container.querySelector("dialog");
    const titulo = dialog.querySelector("#quiz-titulo");
    const introducao = dialog.querySelector(".quiz-introducao");
    const form = dialog.querySelector(".quiz-form");
    const resultado = dialog.querySelector(".quiz-resultado");
    const premio = dialog.querySelector(".quiz-premio");
    const cupom = dialog.querySelector(".quiz-cupom");
    const status = dialog.querySelector(".quiz-status");
    let curso;
    let perguntaAtual = 0;

    dialog.querySelector(".quiz-bau-imagem").src = new URL("../../assets/icons/investimento.png", pastaQuiz).href;
    dialog.querySelector(".quiz-voltar").href = new URL("../../index.html", pastaQuiz).href;

    function mudarTela(tela, textoTitulo, focar = true) {
        dialog.dataset.tela = tela;
        introducao.hidden = tela !== "introducao";
        form.hidden = tela !== "pergunta";
        resultado.hidden = tela !== "resultado";
        titulo.textContent = textoTitulo;
        status.textContent = "";
        dialog.scrollTop = 0;
        if (focar) titulo.focus();
    }

    function mostrarPergunta() {
        const pergunta = curso.perguntas[perguntaAtual];
        dialog.querySelector(".quiz-enunciado").textContent = pergunta.enunciado;
        const alternativas = dialog.querySelector(".quiz-alternativas");
        alternativas.replaceChildren();

        pergunta.alternativas.forEach((texto, indice) => {
            const botao = document.createElement("button");
            botao.className = "quiz-alternativa";
            botao.type = "submit";
            botao.name = "resposta";
            botao.value = indice;
            botao.textContent = `${String.fromCharCode(65 + indice)}. ${texto}`;
            alternativas.appendChild(botao);
        });
        mudarTela("pergunta", `Questão ${perguntaAtual + 1}.`);
    }

    function mostrarResultado(venceu) {
        premio.hidden = !venceu;
        cupom.textContent = venceu ? curso.cupom : "";
        dialog.querySelector(".quiz-resumo").textContent = venceu
            ? "Você acabou de conquistar o seu tão sonhado cupom de desconto para entrar na próxima turma!"
            : "Marujo, aparentemente você errou a sua última pergunta. Não se preocupe, você pode tentar mais uma vez outra hora. Boa sorte nesse mar do mercado de trabalho!";
        mudarTela("resultado", venceu ? "Parabéns Marujo!" : "A aventura chegou ao fim!");
    }

    botoes.forEach(botao => {
        botao.addEventListener("click", () => {
            curso = quizzes[botao.dataset.quiz];
            if (!curso) return;
            perguntaAtual = 0;
            premio.hidden = true;
            cupom.textContent = "";
            mudarTela("introducao", "Atenção Marujos!", false);
            dialog.showModal();
            titulo.focus();
        });
    });

    dialog.querySelector(".quiz-iniciar").addEventListener("click", mostrarPergunta);
    form.addEventListener("submit", evento => {
        evento.preventDefault();
        if (form.hidden || !evento.submitter) return;
        const selecionada = Number(evento.submitter.value);
        if (selecionada !== curso.perguntas[perguntaAtual].correta) {
            mostrarResultado(false);
            return;
        }
        perguntaAtual++;
        if (perguntaAtual < curso.perguntas.length) mostrarPergunta();
        else mostrarResultado(true);
    });

    dialog.querySelector(".quiz-fechar").addEventListener("click", () => dialog.close());
    
    cupom.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText(curso.cupom);
            status.textContent = "Cupom copiado!";
        } catch {
            status.textContent = `Copie este código manualmente: ${curso.cupom}`;
        }
    });
}

iniciarQuiz().catch(erro => {
    console.error(erro);
    const aviso = document.createElement("p");
    aviso.setAttribute("role", "alert");
    aviso.textContent = "Não foi possível carregar o desafio. Atualize a página para tentar novamente.";
    document.getElementById("quiz")?.appendChild(aviso);
});
