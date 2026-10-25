# Prisma Cursos 🏴‍☠️

Projeto desenvolvido pelo **Grupo 2** como parte do **processo trainee da Orc’estra**, utilizando **HTML, CSS e JavaScript sem a utilização de frameworks**.

A **Prisma Cursos** é uma plataforma de cursos profissionalizantes voltada para jovens em busca do primeiro emprego e profissionais em transição de carreira. O projeto combina aprendizado, tecnologia e exploração, utilizando uma temática pirata para tornar a experiência mais envolvente, simples e intuitiva.

> 🚧 **Status:** Projeto em desenvolvimento.

## 🎯 Objetivo

Transformar o protótipo desenvolvido no Figma em um site responsivo e interativo, aplicando conhecimentos de desenvolvimento front-end e trabalho em equipe.

O projeto envolve:

* Estruturação de páginas com HTML semântico e focado em acessibilidade.
* Estilização, layout e responsividade com CSS3.
* Implementação de interações dinâmicas e validações com JavaScript.
* Versionamento e colaboração com Git e GitHub.

## 🎨 Protótipo e Design

O layout e a identidade visual têm como referência o protótipo desenvolvido no Figma:

🔗 [Acessar o protótipo no Figma](https://www.figma.com/design/sA4WehhMqD8b2tzQaybbxv/Prot%C3%B3tipo?node-id=0-1)

## 🔄 Alterações no Protótipo

Para acompanhar a evolução do projeto e entender as adaptações feitas ao longo do desenvolvimento em relação ao design original, consulte o documento detalhado:

📄 [Documento de Alterações no Protótipo Inicial](https://docs.google.com/document/d/1m6kJg0FneAHZ3miEMn4DGihp8ug6rZR350OMu3emlmI/edit?usp=sharing)

## 📄 Páginas Previstas

* **Início (`index.html`):** apresentação da plataforma, destaques e acesso às principais áreas do site.
* **Cursos (`pages/cursos.html`):** catálogo completo com os cursos disponíveis.
* **Páginas Individuais de Cursos:** informações específicas sobre cada formação:
  * After Effects (`pages/curso-after-effects.html`)
  * Empreendedorismo (`pages/curso-empreendedorismo.html`)
  * Gestão de Projetos (`pages/curso-gestao.html`)
  * Marketing Digital (`pages/curso-marketing.html`)
  * Python (`pages/curso-python.html`)
* **Quem Somos (`pages/quem-somos.html`):** apresentação da instituição, sua história, missão e valores.
* **Depoimentos (`pages/depoimentos.html`):** relatos e avaliações de alunos sobre a plataforma.
* **Formulário (`pages/formulario.html`):** área para preenchimento e envio de informações pelo usuário.
* **Feedbacks:** apresentação dos retornos e avaliações da plataforma.

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Finalidade | 
| ----- | ----- | 
| **HTML5** | Estruturação semântica e conteúdo das páginas | 
| **CSS3** | Estilização, layout e responsividade | 
| **JavaScript (ES6+)** | Interatividade, dinâmica de páginas e validações | 
| **Git** | Controle de versão do código-fonte | 
| **GitHub** | Hospedagem do repositório, publicação e colaboração | 
| **Figma** | Design de interface e prototipação | 

## 📋 Requisitos do Sistema

### Requisitos Funcionais (RF)

* **RF01 — Página inicial:** apresentar a plataforma e direcionar o usuário para as principais áreas do site.
* **RF02 — Navegação:** disponibilizar links e controles de navegação entre as páginas do projeto.
* **RF03 — Catálogo de cursos:** exibir os cursos disponíveis na página de cursos.
* **RF04 — Detalhes dos cursos:** permitir que o usuário acesse páginas com informações específicas de cada curso.
* **RF05 — Informações dos cursos:** apresentar conteúdos relevantes e específicos de cada formação.
* **RF06 — Informações institucionais:** disponibilizar a página "Quem Somos" com informações sobre a instituição.
* **RF07 — Depoimentos:** apresentar depoimentos e avaliações dos alunos.
* **RF08 — Formulário:** permitir o preenchimento dos campos disponibilizados na página de formulário.
* **RF09 — Validação do formulário:** verificar os campos obrigatórios definidos no formulário antes de permitir o envio.
* **RF10 — Confirmação visual:** apresentar um retorno visual ao usuário após a interação com o formulário.
* **RF11 — Feedbacks:** disponibilizar a página de feedbacks prevista no projeto.
* **RF12 — Acesso entre páginas relacionadas:** permitir navegação direta entre o catálogo e os detalhes dos cursos.

### Requisitos Não Funcionais (RNF)

* **RNF01 — Responsividade:** as páginas devem adaptar-se a celulares, tablets e computadores.
* **RNF02 — Usabilidade:** navegação clara e elementos interativos compreensíveis.
* **RNF03 — Consistência visual:** manter a identidade visual coerente em todas as páginas.
* **RNF04 — Acessibilidade:** organizar textos, links, imagens e controles facilitando a utilização do site.
* **RNF05 — Compatibilidade:** funcionamento adequado nos navegadores modernos mais utilizados.
* **RNF06 — Desempenho:** otimização de imagens, estilos e scripts evitando lentidões.
* **RNF07 — Manutenibilidade:** código organizedo com separação de HTML, CSS e JavaScript.
* **RNF08 — Hospedagem:** publicação como site estático por meio do GitHub Pages.
* **RNF09 — Caminhos dos arquivos:** utilizar caminhos relativos compatíveis com o repositório e com a publicação online.
* **RNF10 — Sem dependências:** o projeto funciona sem exigir frameworks ou bibliotecas externas.

## 📁 Estrutura de Pastas

```
prisma-cursos-grupo-2/
├── assets/
│   ├── fonts/
│   ├── icons/
│   └── img/
├── components/
│   ├── navbar/
│   │   ├── navbar.css
│   │   ├── navbar.html
│   │   └── navbar.js
│   ├── quiz/
│   │   ├── quiz.css
│   │   ├── quiz.html
│   │   └── quiz.js
│   └── rodape/
│       ├── rodape.css
│       ├── rodape.html
│       └── rodape.js
├── css/
│   └── css_pages/
│       ├── curso-after-effects.css
│       ├── curso-empreendedorismo.css
│       ├── curso-gestao.css
│       ├── curso-marketing.css
│       ├── curso-python.css
│       ├── cursos.css
│       ├── depoimentos.css
│       ├── formulario.css
│       ├── home.css
│       └── quem-somos.css
├── js/
├── pages/
│   ├── curso-after-effects.html
│   ├── curso-empreendedorismo.html
│   ├── curso-gestao.html
│   ├── curso-marketing.html
│   ├── curso-python.html
│   ├── cursos.html
│   ├── depoimentos.html
│   ├── formulario.html
│   └── quem-somos.html
├── index.html
└── README.md
```

### Organização dos arquivos

* `assets/`: imagens, ícones e fontes utilizados na aplicação.
* `components/`: componentes modulares e reutilizáveis (Navbar, Quiz, Rodapé) com seus respetivos estilos e comportamentos.
* `css/css_pages/`: folhas de estilo específicas de cada página.
* `js/`: scripts globais e utilitários.
* `pages/`: subpáginas HTML do site.
* `index.html`: página principal (Início) na raiz do projeto.

## 🚀 Como Executar

### Online via GitHub Pages

O projeto pode ser acessado diretamente pelo browser sem necessidade de instalações:

1. Acesse o repositório no GitHub: [Prisma Cursos — Grupo 2](https://github.com/Bercacos/prisma-cursos-grupo-2).
2. Para habilitar a publicação (se necessário): vá em **Settings** → **Pages**.
3. Em **Source**, selecione a branch principal (`main`) e a pasta raiz (`/root`).
4. Salve e acesse o link gerado pelo GitHub Pages.

### Executar Localmente

Para visualizar ou modificar o projeto na sua máquina:

1. Clone o repositório:
   ```bash
   git clone https://github.com/Bercacos/prisma-cursos-grupo-2.git
   ```
2. Entre no diretório do projeto:
   ```bash
   cd prisma-cursos-grupo-2
   ```
3. Abra o arquivo `index.html` em qualquer navegador.
   *(Recomendado: utilize a extensão **Live Server** do VS Code para servir os componentes JavaScript via HTTP local).*

## 📌 Padrões de Desenvolvimento

* Utilizar nomes de arquivos em minúsculas, sem acentos e separados por hífens (`kebab-case`).
* Manter estrita separação entre estrutura HTML, estilização CSS e scripts JavaScript.
* Utilizar apenas caminhos relativos (`./` e `../`) para referenciar arquivos e assets.
* Garantir a semântica do HTML e foco em acessibilidade.
* Garantir a adaptação responsiva para telas móbile, tablet e desktop.
* Commits frequentes com mensagens claras e objetivas.

## ⚠️ Observação sobre o Formulário

A confirmação visual exibida no envio do formulário representa o comportamento da interface gráfica. Como a hospedagem estática do GitHub Pages não possui servidor backend integrado, os dados enviados não são armazenados em banco de dados sem a integração de serviços terceiros de formulário (ex: Formspree, EmailJS).

## 👥 Equipe

**Grupo 2 — Processo Trainee Orc’estra**

* Bernardo Broetto Brun — [GitHub](https://github.com/Bercacos)
* Miguel de Almeida Melo — [GitHub](https://github.com/mikaelltda)
* Natália Lambert — [GitHub](https://github.com/natalialambert)
* Ana Clara Silva — [GitHub](https://github.com/anaclarasilva-code)
* Marcelo Diniz Panzolini — [GitHyb](https://github.com/LION21-BR)