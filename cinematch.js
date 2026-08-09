const prompt = require("prompt-sync")();

// RF01 - PERFIL INTERATIVO PESSOA USUARIA
    let usuario;
    let campoObrigatorio = ''; 
    do {
        usuario = {
            nome: prompt("Informe seu Nome(*): "), 
            idade: Number(prompt("Informe sua idade: ")), 
            generosFavoritos: prompt("Informe os gêneros que você mais gosta.(Separe por vírgula, ex: Ação, Comédia, Terror)(*): ").split(',').map((g) => g.trim())  
        };
        // IF TERNÁRIO COM MÉTODO DE ARRAY EVERY PARA VALIDAR CAMPOS OBRIGATÓRIOS
        //console.log(typeof usuario.nome.trim());
        campoObrigatorio = ((usuario.nome.trim() === '' || usuario.generosFavoritos.every(g => g === '')) ?  console.log(`Obrigatório preencher seu nome e ao menos um gênero que gosta!`) : 'OK');   
    } while( campoObrigatorio != 'OK');
    //console.log(usuario);

// RF02 - CATALOGO DE CONTEUDOS 
    // CLASSES
        // Pai
        class Conteudo {
            constructor(id, titulo, tipo, generos, duracaoMinutos) {
                this.id = id;
                this.titulo = titulo;
                this.tipo = tipo;
                this.generos = generos;
                this.duracaoMinutos = duracaoMinutos;
            }
            exibirDados(){
                console.log(`Título: ${this.titulo} - Tipo: ${this.tipo} - Gênero(s): ${this.generos} - Duração em Minutos: ${this.duracaoMinutos}`);
            }
        };
        // Filha(s)
        // Filme
        class Filme extends Conteudo {
            constructor(id,titulo,tipo,generos,duracaoMinutos) {
            super(id,titulo,"Filme",generos,duracaoMinutos);
            }
        };
        // Série
        class Serie extends Conteudo {
            constructor(id,titulo,tipo,generos,duracaoMinutos,temporadas) {
            super(id,titulo,"Série",generos,duracaoMinutos);
            this.temporadas = temporadas;
            }
            exibirDadosSerie(){
            this.exibirDados();
                console.log(` - Temporada(s): ${this.temporadas}`);
            }
        };
    // ARRAY CATALOGO DE CONTEUDOS
        const catalogo = [ 
            new Filme( 1, "Horizonte Sem Fim", this.tipo, ["Ficção Científica", "Drama", "Aventura"], 148 ), 
            new Serie( 2, "Cidade das Sombras", this.tipo, ["Suspense", "Crime", "Drama"], 75, 6 ), 
            new Filme( 3, "Operação Tempestade", this.tipo, ["Ação", "Guerra"], 129 ), 
            new Serie( 4, "Código Eclipse", this.tipo, ["Ficção Científica", "Mistério"], 56, 4 ), 
            new Filme( 5, "Missão Final", this.tipo, ["Ação", "Aventura"], 120 ), 
            new Serie( 6, "Ecos do Amanhã", this.tipo, ["Drama", "Ficção Científica", "Mistério"], 215, 15 ), 
            new Filme( 7, "O Reino Encantado", this.tipo, ["Animação", "Família", "Fantasia"], 118 ), 
            new Serie( 8, "Confusão no Prédio", this.tipo, ["Comédia"], 145, 9 ), 
            new Filme( 10, "A Mansão da Neblina", this.tipo, ["Terror", "Suspense"], 145 ), 
            new Filme( 11, "Corações ao Entardecer", this.tipo, ["Romance", "Drama"], 128 ), 
            new Filme( 12, "O Último Feitiço", this.tipo, ["Fantasia", "Aventura"], 122 ), 
            new Serie( 13, "Café das Seis", this.tipo, ["Romance", "Comédia"], 134, 7 ), 
            new Serie( 14, "Ritmo das Ruas", this.tipo, ["Musical", "Comédia"], 134, 7 ) 
        ];
        //console.log(catalogo);

// RF03 - CALCULAR COMPATIBILIDADE CONTEUDO

    // ARRAY DISTINTO DE GENEROS DE TODO O CATALOGO
        const generosDistintos = catalogo.reduce((agrupador, item) => {
            item.generos.forEach(genero => {
                if (!agrupador.includes(genero)) {
                    agrupador.push(genero);
                }
            });
            return agrupador;
        },[]);
    
    // NORMALIZANDO GENERO USUARIO PARA COMPATIBILIDADE.
        //console.log(usuario);
        const generosUsuario = (usuario.generosFavoritos).map((item) => {
            return item.toUpperCase();
        });

    // FUNCAO COMPATIBILIDADE 
    const compatilibidade = () => {  
    // ARRAY DA COMPATIBILIDADE DO CONTEUDO
        const compatilibidadeConteudo = catalogo.map((item) => {
            
            // Generos em Comum
            const generosComum = item.generos.filter((genero) => {
                return generosUsuario.includes(genero.toUpperCase());
            });
            // Generos inexplorados
            const generosNaoExplorados = item.generos.filter((genero) => {
                return !generosUsuario.includes(genero.toUpperCase());
            });
            // Percentual compatibilidade
            const percentualCompatibilidade = Number((generosComum.length / item.generos.length) * 100).toFixed(2);

            // RF04 - CLASSIFICAR A COMPATIBILIDADE
            let classificacao;
            
            if (percentualCompatibilidade >= 0 && percentualCompatibilidade <= 49) {
                classificacao = "Baixa afinidade";
            }else if (percentualCompatibilidade >= 50 && percentualCompatibilidade <= 79) {
                classificacao = "Média afinidade";
            } else {
                classificacao = "Alta afinidade";
            };
            //console.log(generosComum.length);
            return {
                id: item.id,
                titulo: item.titulo,
                tipo: item.tipo,
                compatibilidade: percentualCompatibilidade,
                numeroGeneros: item.generos.length,
                generosComum: generosComum.length === 0 ? "Não" : generosComum,
                generosNaoExplorados: generosNaoExplorados.length === 0 ? "Não" : generosNaoExplorados,
                classificacao
            };
        });
        //console.log(compatilibidadeConteudo);
        return compatilibidadeConteudo;
    };
    //compatilibidade();
    // MOSTRAR O RESULTADO FORMATADO
    const relatorioCompatibilidade = () => {
        console.log(`============= REL. COMPATIBILIDADE CONTEÚDO =============`);
        console.log(`De: ${usuario.nome.toUpperCase()}\n=========================================================`);
        const listarCompatibilidade = compatilibidade().forEach((item, i) => {
                console.log(`Título: ${item.titulo}`);
                console.log(`Tipo: ${item.tipo}`);
                console.log(`Compatibilidade: ${item.compatibilidade}%`);
                console.log(`Gêneros em comum: ${item.generosComum}`);
                console.log(`Gêneros não explorados: ${item.generosNaoExplorados}`);
                console.log(`Classificação: ${item.classificacao}`);
                console.log(`---------------------------------------------------------`);
        });
        return listarCompatibilidade;
    };
    //relatorioCompatibilidade();
    
// RF05 - LISTAR HABILIDADES FALTANTES
    const relatorioNaoExplorados = () => {
        console.log(`=============== REL. GÊNEROS NÃO EXPLORADOS ===============`);
        console.log(`De: ${usuario.nome.toUpperCase()}\n===========================================================`);
        const listarNaoExplorados = compatilibidade().forEach((item) => {
            if (item.generosNaoExplorados != 'Não') {
                console.log(`Para o título "${item.titulo}" você ainda não explorou:`);
                for (let i = 0; i < item.generosNaoExplorados.length; i++) {
                    console.log(`- ${item.generosNaoExplorados[i]}`);
                };
                console.log(`-----------------------------------------------------------`);     
            };
        });
        return listarNaoExplorados;
    };
    //relatorioNaoExplorados();

//RF06 - ENCONTRAR VAGA COM MAIOR COMPATIBILIDADE

    const conteudoMaisCompativel = () => { 
        console.log(`=============== REL. PRINCIPAL RECOMENDAÇÃO ===============`);
        console.log(`De: ${usuario.nome.toUpperCase()}\n===========================================================`);

        // Encontrar maior percentual compatibilidade - reduce
        const maiorPercentual = compatilibidade().reduce((max,item) =>{
            if(Number(item.compatibilidade) >= Number(max.compatibilidade)){
                return Number(item.compatibilidade);        
            } 
            return max;
        });
        //console.log(maiorPercentual);
        if (maiorPercentual > 0 ) {
            // Filtrar conteudos no maior % (filter)
            const conteudoMaiorPercentual = compatilibidade().filter((item) => {
                return Number(item.compatibilidade) === maiorPercentual;
            });
            // Critério final desempate por número de gêneros
            const conteudoMaiorAderencia = conteudoMaiorPercentual.reduce((max, item) => {
                return item.numeroGeneros >= max.numeroGeneros ? item : max;
            });
            console.log(`${conteudoMaiorAderencia.titulo} (${conteudoMaiorAderencia.tipo})`);
            console.log(`Compatibilidade: ${conteudoMaiorAderencia.compatibilidade}%`);
        } else {
            console.log(`Não há recomendação ao perfil, verifique para sugerir!`);
        };
        console.log(`-----------------------------------------------------------`);
        //return conteudoMaiorAderencia;
    };
    //conteudoMaisCompativel();
 
// RF07 - GERAR UMA RECOMENDAÇÃO PERSONALIZADA 

    const recomendacaoPersonalizada = () => {
        // Filtra os conteúdos com gêneros não explorados > 0 
        const filtraNaoExplorados = compatilibidade().filter((item) => {
            return item.generosNaoExplorados.length > 0;
        });
        //console.log(filtraNaoExplorados);  
        // Cria array de conteúdo das recomendaões  
        const conteudoRecomendacoes = filtraNaoExplorados.map((item) => {
            return {
                    id: item.id,
                    titulo: item.titulo,
                    generosRecomendar: item.generosNaoExplorados.length != 0 ? item.generosNaoExplorados.slice() : 0
            };
        });
        //console.log(recomendaGeneros);
        // Cria array com gênero(s) do objeto usuário (perfil)
        const generosPerfil = {generosFavoritos: usuario.generosFavoritos};
        //console.log(generosPerfil);
        // Separa o conteúdo a recomendar
        const recomendacaoAtual = conteudoRecomendacoes.shift();
        //console.log(recomendacaoAtual);
        // Separa o gênero do conteúdo a recomendar
        const generoRecomendar = recomendacaoAtual.generosRecomendar.shift()
        //console.log(generoRecomendar);
        // Separa o gênero favorito do perfil
        const generoPerfil = generosPerfil.generosFavoritos.shift();
        //console.log(generoPerfil);
        //console.log(generosPerfil);

        console.log(`================== RECOMENDAÇÃO PERSONALIZADA ==================`);
        console.log(`Para: ${usuario.nome.toUpperCase()}\n===============================================================`);
        console.log(`Você já curte 👍 ${generoPerfil.toUpperCase()} — que tal arriscar um pouco de ${generoRecomendar.toUpperCase()}?`);
        console.log(`"${recomendacaoAtual.titulo.toUpperCase()}" pode ser sua próxima opção de título!`);
        // RF13 - Função Closure
        // Contador de recomendações    
            const contaRecomendacoes = () => {
                let contador = 0;
                return () => {
                    contador++;
                    console.log(`===============================================================`);
                    console.log(`❤️  Recomendação Nr.: ${contador}`);
                };

            };
        const conta = contaRecomendacoes();
        conta();
        console.log(`===============================================================`);

        //console.log(recomendacaoAtual);
        if (recomendacaoAtual.generosRecomendar.length > 0) {
            conteudoRecomendacoes.push(recomendacaoAtual);
        };
        generosPerfil.generosFavoritos.push(generoPerfil);
        //console.log(generosPerfil)
        //console.log(conteudoRecomendacoes);
    };
    recomendacaoPersonalizada();

// RF08 – Usar métodos de array - OK
    // Usar pelo menos 3 métodos de array entre: map; filter; find; every; reduce
        // recomendacaoPersonalizada() // Função usou 2 métodos map e filter
        // conteudoMaisCompativel() // Função usou 2 métodos reduce e filter

// RF09 - Criar classe Conteudo - OK
    //catalogo.forEach((conteudo) => {conteudo.exibirDados();});
    //catalogo.forEach((conteudo) => { if (conteudo instanceof Serie) {conteudo.exibirDadosSerie();}});
    //catalogo.forEach((conteudo) => { if (conteudo instanceof Filme) {conteudo.exibirDados();}});

// RF10 – Usar herança - OK
    // Classes Filme e Serie.

// RF11 – Demonstrar uso do this - OK
    // Os métodos das classes Conteudo e Serie, usam.
    
// RF12 – Usar callback 
    // Função Finalizar APP - Function tradicional
    function finalizarApp(nomeUsuario, fnMensagem){
        console.log(`================== CINEMATCH JS - FINALIZADO ===================`);
        fnMensagem(nomeUsuario);
        console.log(`================================================================`);
    };
    // Função Mensagem Final - Arrow Function
    const mensagemFinal = (nome) => {
         console.log(`${nome.toUpperCase()}, aproveite sua maratona! Bom streaming.`); 
    }; 
    //finalizarApp(usuario.nome, mensagemFinal);