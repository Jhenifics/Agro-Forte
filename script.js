document.addEventListener("DOMContentLoaded", function() {
    
    // ==========================================================================
    // 1. SISTEMA DE ACESSIBILIDADE DE TEMA E ZOOM
    // ==========================================================================
    const btnAumentar = document.getElementById("btnAumentar");
    const btnDiminuir = document.getElementById("btnDiminuir");
    const btnContraste = document.getElementById("btnContraste");
    
    let nivelFonte = 100;

    btnAumentar.addEventListener("click", function() {
        if (nivelFonte < 130) {
            nivelFonte += 10;
            document.documentElement.style.fontSize = nivelFonte + "%";
        }
    });

    btnDiminuir.addEventListener("click", function() {
        if (nivelFonte > 85) {
            nivelFonte -= 10;
            document.documentElement.style.fontSize = nivelFonte + "%";
        }
    });

    btnContraste.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });

    // ==========================================================================
    // 2. ANIMAÇÃO DINÂMICA DO GRÁFICO DO IBGE
    // ==========================================================================
    const barrasGrafico = document.querySelectorAll(".barra");

    function animarGrafico() {
        barrasGrafico.forEach(barra => {
            const valorAlvo = barra.getAttribute("data-porcentagem");
            barra.style.width = valorAlvo + "%";

            const textoInterno = barra.querySelector(".barra-texto");
            if (textoInterno) {
                let valorAtual = 0;
                const incremento = parseFloat(valorAlvo) / 60;
                
                const intervaloContagem = setInterval(() => {
                    valorAtual += incremento;
                    if (valorAtual >= parseFloat(valorAlvo)) {
                        valorAtual = parseFloat(valorAlvo);
                        clearInterval(intervaloContagem);
                    }
                    textoInterno.innerText = valorAtual.toFixed(valorAtual % 1 === 0 ? 0 : 1) + "%";
                }, 16);
            }
        });
    }

    setTimeout(animarGrafico, 400);

    // ==========================================================================
    // 3. SISTEMA DO QUIZ DINÂMICO DE 3 QUESTÕES (COM OPÇÃO DE REINICIAR)
    // ==========================================================================
    const bancoPerguntas = [
        {
            cenario: "Cenário 1: Uma fazenda precisa expandir sua produtividade neste ano. Qual a melhor decisão?",
            opcoes: [
                { texto: "Derrubar a mata nativa vizinha para abrir espaço físico imediato.", correta: false },
                { texto: "Investir em tecnologia de precisão e sensores de solo na área ativa.", correta: true }
            ],
            feedbackC: "Correto! A tecnologia eleva a produtividade vertical sem desmatamento.",
            feedbackE: "Incorreto. Abrir áreas causa multas ambientais pesadas e compactação."
        },
        {
            cenario: "Cenário 2: Período de estiagem severa na região. Como gerenciar a captação de água?",
            opcoes: [
                { texto: "Manter a irrigação contínua por aspersão operando o dia inteiro.", correta: false },
                { texto: "Adotar gotejamento monitorado por sensores de umidade IoT.", correta: true }
            ],
            feedbackC: "Perfeito! Sensores economizam até 40% de recursos hídricos nascentes.",
            feedbackE: "Errado. Irrigar sem monitoramento esgota os mananciais locais rapidamente."
        },
        {
            cenario: "Cenário 3: Como manter o solo rico em nutrientes sem saturar de químicos?",
            opcoes: [
                { texto: "Fazer rotação estratégica de culturas com leguminosas.", correta: true },
                { texto: "Plantar a mesma cultura perene consecutivamente por anos.", correta: false }
            ],
            feedbackC: "Excelente! A rotação fixa nitrogênio e quebra o ciclo de pragas naturalmente.",
            feedbackE: "Incorreto. Monocultura esgota os minerais e cansa a estrutura da terra."
        }
    ];

    let indiceAtual = 0;
    let acertosTotais = 0;

    const elPergunta = document.getElementById("quiz-pergunta");
    const elOpcoes = document.getElementById("quiz-opcoes");
    const elResultado = document.getElementById("resultadoSimulacao");

    function renderizarFase() {
        elResultado.className = "";
        elResultado.innerHTML = "";

        if (indiceAtual >= bancoPerguntas.length) {
            // Fim do Quiz: Esconde a caixa de perguntas
            document.getElementById("quiz-conteiner").style.display = "none";
            document.getElementById("quiz-instrucao").innerText = "Desafio Concluído!";
            
            // Exibe o feedback de pontuação final
            elResultado.className = "retorno-sucesso";
            elResultado.innerHTML = `
                <p><strong>Fim do Desafio!</strong> Você equilibrou a produção com sucesso em ${acertosTotais} de ${bancoPerguntas.length} cenários propostos.</p>
            `;

            // Cria o botão de reiniciar dinamicamente com estilo padronizado
            const btnReiniciar = document.createElement("button");
            btnReiniciar.className = "btn-principal";
            btnReiniciar.innerText = "Jogar Novamente 🔄";
            btnReiniciar.style.marginTop = "20px"; 

            // Lógica para resetar o estado do jogo ao clicar
            btnReiniciar.addEventListener("click", function() {
                indiceAtual = 0;
                acertosTotais = 0;
                
                document.getElementById("quiz-conteiner").style.display = "block";
                document.getElementById("quiz-instrucao").innerText = "Responda aos cenários de gestão e teste sua pontuação de equilíbrio ambiental.";
                
                renderizarFase();
            });

            elResultado.appendChild(btnReiniciar);
            return;
        }

        const dadosFase = bancoPerguntas[indiceAtual];
        elPergunta.innerText = dadosFase.cenario;
        elOpcoes.innerHTML = "";

        dadosFase.opcoes.forEach(opcao => {
            const btn = document.createElement("button");
            btn.className = "btn-opcao";
            btn.innerText = opcao.texto;
            
            btn.addEventListener("click", function() {
                const botoesGerais = elOpcoes.querySelectorAll("button");
                botoesGerais.forEach(b => b.disabled = true);

                if (opcao.correta) {
                    acertosTotais++;
                    elResultado.className = "retorno-sucesso";
                    elResultado.innerHTML = dadosFase.feedbackC;
                } else {
                    elResultado.className = "retorno-alerta";
                    elResultado.innerHTML = dadosFase.feedbackE;
                }

                // Aguarda 3,5 segundos para leitura do feedback e avança
                setTimeout(function() {
                    indiceAtual++;
                    renderizarFase();
                }, 3500);
            });

            elOpcoes.appendChild(btn);
        });
    }

    if (elPergunta && elOpcoes) {
        renderizarFase();
    }
});
