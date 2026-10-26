# Prisma Cursos 

Projeto desenvolvido pelo **Grupo 2** como parte do **processo trainee da Orc’estra**, utilizando **HTML, CSS e JavaScript sem a utilização de frameworks**.

A **Prisma Cursos** é uma plataforma de cursos profissionalizantes voltada para jovens em busca do primeiro emprego e profissionais em transição de carreira. O projeto combina aprendizado, tecnologia e exploração, utilizando uma temática pirata para tornar a experiência mais envolvente, simples e intuitiva.

## 🌐 Acesso ao projeto

- **Site:** [https://bercacos.github.io/prisma-cursos-grupo-2/](https://bercacos.github.io/prisma-cursos-grupo-2/)
- **Repositório:** [github.com/Bercacos/prisma-cursos-grupo-2](https://github.com/Bercacos/prisma-cursos-grupo-2)


## 🎯 Objetivo

Transformar o protótipo desenvolvido no Figma em um site institucional responsivo, interativo e acessível publicamente. A solução busca fortalecer a presença digital da Prisma Cursos, apresentar a instituição e seu modelo híbrido de ensino, organizar a divulgação dos cursos, demonstrar resultados por meio de depoimentos e facilitar o contato com potenciais alunos.

O público principal é formado por jovens de 18 a 25 anos em busca de qualificação e entrada no mercado de trabalho, além de profissionais interessados em requalificação ou transição de carreira.

O projeto envolve:

* Estruturação de páginas com HTML semântico e focado em acessibilidade.
* Estilização, layout e responsividade com CSS3.
* Implementação de interações dinâmicas e validações com JavaScript.
* Versionamento e colaboração com Git e GitHub.
* Publicação do site como uma aplicação estática no GitHub Pages.

## 🎨 Protótipo e Design

O layout e a identidade visual têm como referência o protótipo desenvolvido no Figma:

🔗 [Acessar o protótipo no Figma](https://www.figma.com/design/sA4WehhMqD8b2tzQaybbxv/Prot%C3%B3tipo?node-id=0-1)

## 🔄 Alterações no Protótipo

Para acompanhar a evolução do projeto e entender as adaptações feitas ao longo do desenvolvimento em relação ao design original, consulte o documento detalhado:

📄 [Documento de Alterações no Protótipo Inicial](https://docs.google.com/document/d/1m6kJg0FneAHZ3miEMn4DGihp8ug6rZR350OMu3emlmI/edit?usp=sharing)

## ✨ Funcionalidades

* Navegação responsiva compartilhada entre as páginas.
* Catálogo com cinco cursos disponíveis.
* Páginas individuais com conteúdo, trilha e chamada para inscrição.
* Quiz em formato de easter egg nas páginas de curso, com cupom de desconto como recompensa.
* Página institucional e área de depoimentos.
* Formulário de contato com validação do navegador e confirmação visual.
* Rodapé reutilizável carregado dinamicamente.

## 🎮 Elemento de Gamificação

O elemento de gamificação obrigatório foi implementado como um **easter egg nas páginas de curso**. O acesso ao desafio fica parcialmente escondido na rota do curso e foi pensado para recompensar quem leu o conteúdo da página com atenção.

Ao encontrar o desafio, o usuário responde a três perguntas específicas sobre o curso que acabou de consultar. Uma resposta incorreta encerra a tentativa; ao acertar todas as perguntas, o usuário recebe um cupom de desconto correspondente ao curso e pode copiar o código para a área de transferência.

A interface e o comportamento reutilizável ficam em `components/quiz/`. As perguntas, respostas corretas e cupons específicos de Marketing Digital, Python, Gestão de Projetos, Empreendedorismo e After Effects ficam centralizados em `js/perguntas-quiz.js`.

## 📄 Páginas Implementadas

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

O arquivo `pages/pagina-padrao-cursos.html` é mantido como modelo estrutural das páginas de curso.

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Finalidade | 
| ----- | ----- | 
| **HTML5** | Estruturação semântica e conteúdo das páginas | 
| **CSS3** | Estilização, layout e responsividade | 
| **JavaScript (ES6 Modules)** | Componentes reutilizáveis, quiz e interações |
| **Git** | Controle de versão do código-fonte | 
| **GitHub** | Hospedagem do repositório, publicação e colaboração | 
| **Figma** | Design de interface e prototipação | 

## 📋 Requisitos do Projeto

Os requisitos abaixo seguem o Documento de Requisitos do Processo Trainee 26.2. A validação definitiva deve ser feita no site publicado, considerando todos os critérios de aceite descritos no documento original.

### Requisitos Funcionais

| ID | Requisito | Implementação no projeto |
| --- | --- | --- |
| **F01** | Navegar pela barra de navegação fixa | Navbar compartilhada com acesso a Início, Quem Somos, Cursos, Depoimentos e Contato |
| **F02** | Acessar o menu responsivo em mobile e tablet | Menu colapsável controlado por JavaScript |
| **F03** | Visualizar a seção inicial e seus CTAs | Página inicial com apresentação, imagens e links de destaque |
| **F04** | Visualizar “Quem Somos” | Página institucional com apresentação, missão, valores e história |
| **F05** | Visualizar “Cursos” | Catálogo com nome, descrição e acesso aos detalhes de cada curso |
| **F06** | Visualizar “Depoimentos” | Página e destaques com identificação dos alunos e seus relatos |
| **F07** | Visualizar “Contato” | Informações e atalhos de contato presentes na interface |
| **F08** | Visualizar o formulário de contato | Formulário com campos obrigatórios de nome, e-mail e mensagem |
| **F09** | Preencher e validar o formulário | Validação dos campos e confirmação visual após envio válido |

### Requisitos Não Funcionais

| ID | Categoria FURPS+ | Evidência no projeto |
| --- | --- | --- |
| **RNF01** | Implementação | Desenvolvimento em HTML, CSS e JavaScript |
| **RNF02** | Confiabilidade | Navegação e referências internas estruturadas com caminhos relativos |
| **RNF03** | Desempenho | Aplicação estática, sem etapa de build ou dependências de execução |
| **RNF04** | Usabilidade | Media queries para mobile (360 × 800), tablet (768 × 1024) e desktop (1920 × 1080) |
| **RNF05** | Usabilidade | Identidade visual compartilhada por cores, tipografia e componentes reutilizáveis |
| **RNF06** | Suportabilidade | Código versionado em repositório GitHub |
| **RNF07** | Suportabilidade | Separação entre HTML, CSS e JavaScript e organização por páginas e componentes |
| **RNF08** | Outros | Publicação prevista pela branch `main` no GitHub Pages |

## ✅ Critérios de Avaliação Contemplados

* **Cumprimento dos requisitos:** páginas e comportamentos relacionados aos requisitos F01–F09 estão representados na implementação.
* **Fidelidade ao protótipo:** identidade visual baseada no protótipo aprovado no Figma e alterações registradas em documento próprio.
* **Gamificação:** quiz funcional integrado às páginas de curso.
* **Qualidade do código:** arquivos separados por responsabilidade e componentes compartilhados para navbar, quiz e rodapé.
* **Funcionalidade:** navegação, CTAs e validação visual do formulário implementados.
* **Responsividade:** estilos preparados para mobile, tablet e desktop.
* **Versionamento:** desenvolvimento realizado em branches, com integração na `main` e uso de mensagens compatíveis com Conventional Commits.

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
│       ├── pagina-padrao-cursos.css
│       └── quem-somos.css
│   └── global.css
├── docs/
│   └── organização.md
├── js/
│   └── perguntas-quiz.js
├── pages/
│   ├── curso-after-effects.html
│   ├── curso-empreendedorismo.html
│   ├── curso-gestao.html
│   ├── curso-marketing.html
│   ├── curso-python.html
│   ├── cursos.html
│   ├── depoimentos.html
│   ├── formulario.html
│   ├── pagina-padrao-cursos.html
│   └── quem-somos.html
├── index.html
└── README.md
```

### Organização dos arquivos

* `assets/`: imagens, ícones e fontes utilizados na aplicação.
* `components/`: componentes modulares e reutilizáveis (Navbar, Quiz, Rodapé) com seus respectivos estilos e comportamentos.
* `css/`: folhas de estilo específicas de cada página.
* `docs/`: documentação do projeto.
* `js/`: dados e scripts compartilhados, incluindo as perguntas do quiz.
* `pages/`: subpáginas HTML do site.
* `index.html`: página principal (Início) na raiz do projeto.

## 🚀 Como Executar

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
3. Inicie um servidor HTTP local na raiz do projeto. Com a extensão **Live Server** do VS Code, clique em **Go Live**; alternativamente, se tiver Python instalado, execute:
   ```bash
   python -m http.server 8000
   ```
4. Acesse `http://localhost:8000` no navegador.

O servidor local é necessário porque navbar, rodapé e quiz usam `fetch()` para carregar arquivos HTML; abrir `index.html` diretamente pelo protocolo `file://` pode causar bloqueios de segurança no navegador.

## 👥 Equipe

**Grupo 2 — Processo Trainee Orc’estra**

* Bernardo Broetto Brun — [GitHub](https://github.com/Bercacos)
* Miguel de Almeida Melo — [GitHub](https://github.com/mikaelltda)
* Natália Lambert — [GitHub](https://github.com/natalialambert)
* Ana Clara Silva — [GitHub](https://github.com/anaclarasilva-code)
* Marcelo Diniz Panzolini — [GitHub](https://github.com/LION21-BR)
