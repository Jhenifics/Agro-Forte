# 🌱 AgroForte | O Equilíbrio que Alimenta o Futuro

Uma landing page interativa e de alta performance desenvolvida para o **Concurso Agrinho 2026**. O projeto une a conscientização sobre o agronegócio sustentável a recursos práticos de inclusão digital e gamificação educacional, enquadrando-se totalmente nas diretrizes da **Subcategoria 3: Programação Front-End**.

---

## 🎯 Objetivo do Projeto

Demonstrar de forma científica e prática como a tecnologia de precisão pode equilibrar a alta produtividade no campo com a preservação ambiental. O site serve como uma ferramenta educativa digital que apresenta dados estatísticos reais e desafia o usuário a tomar decisões conscientes na gestão agrícola.

---

## 📊 Recursos Científicos e Interatividade

### 📈 Gráfico de Dados Reais (IBGE)
O projeto conta com um gráfico estatístico interativo desenvolvido puramente com **HTML, CSS e JavaScript (Vanilla)**, respeitando a proibição de bibliotecas externas:
* **Efeito Dinâmico:** As barras crescem sozinhas através de animação baseada em frames (`setInterval`).
* **Contador Numérico:** O texto das porcentagens faz uma contagem progressiva em tempo real.
* **Interatividade Tooltip:** Ao passar o rato (hover) sobre as barras, o design destaca o bloco e exibe um balão flutuante indicando as fontes oficiais do **Censo Agropecuário e da Pesquisa PAM do IBGE**.

### 🧠 Quiz de Tomada de Decisão (Algoritmo Lógico)
Um motor de jogo em JavaScript que simula 3 cenários de gestão agrícola real:
* **Lógica Sequencial:** Conduz o usuário fase por fase através de árvores de decisão.
* **Feedbacks Imediatos:** Exibe retornos visuais e textuais (sucesso/alerta) personalizados para cada alternativa.
* **Mecanismo de Reinicialização:** Ao final do desafio, exibe a pontuação e gera dinamicamente um botão de **"Jogar Novamente"** que redefine todo o estado do algoritmo sem precisar atualizar a página.

---

## ♿ Hub de Acessibilidade Digital

Desenvolvido para garantir inclusão digital completa, posicionado de forma fixa e ergonómica no **canto inferior direito** para facilitar a navegação em telemóveis:
* **Controle de Fonte:** Botões dinâmicos de `A+` e `A-` para redimensionamento de texto.
* **Modo Noturno (Contraste):** Alternância completa de variáveis de cores CSS (`dark-mode`) para conforto visual e alto contraste.

📱 **Responsividade Total (`@media queries`):** O layout adapta-se com precisão cirúrgica de computadores a ecrãs de tablets e telemóveis, reorganizando menus e grelhas de dados sem quebras de layout.

---

## 🛠️ Tecnologias Utilizadas

* **Estrutura:** HTML5 Semântico (garantindo boa leitura para leitores de ecrã).
* **Estilização:** CSS3 Avançado (Design Moderno Baseado em Variáveis `:root`).
* **Interatividade e Algoritmos:** JavaScript Vanilla (ES6+) limpo e organizado.
* **Fundamentação Científica:** Bases de dados oficiais do IBGE e conformidade Creative Commons (CC).

---

## 📁 Estrutura de Arquivos do Repositório

O projeto segue uma organização limpa e modular de arquivos, facilitando a legibilidade e a hospedagem no *GitHub Pages*:

| Arquivo / Pasta | Descrição |
| :--- | :--- |
| `index.html` | Estrutura de marcação e todo o conteúdo textual do site. |
| `style.css` | Identidade visual, responsividade (`@media`), modo escuro e animações. |
| `script.js` | Lógica da acessibilidade, motor do Quiz e animação do gráfico. |
| `README.md` | Documentação técnica e apresentação do projeto (Este arquivo). |

---
*Projeto desenvolvido sob orientação docente para submissão oficial no Concurso Agrinho 2026 da Rede Estadual de Ensino do Paraná.*
