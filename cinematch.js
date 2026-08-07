const prompt = require("prompt-sync")();

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

console.log(usuario);

// ARRAY CATALOGO DE CONTEUDOS

const catalogo = [
    { 
        id: 1,
        titulo: "Horizonte Sem Fim",
        tipo: "Filme",
        generos: ["Ficção Científica","Drama", "Aventura"],
        duracaoMinutos: 148,    
        temporadas: 0
    },
    { 
        id: 2,
        titulo: "Cidade das Sombras",
        tipo: "Série",
        generos: ["Suspense", "Crime", "Drama"],
        duracaoMinutos: 75,    
        temporadas: 6
    },
    { 
        id: 3,
        titulo: "Operação Tempestade",
        tipo: "Filme",
        generos: ["Ação","Guerra"],
        duracaoMinutos: 129,    
        temporadas: 0
    },
    { 
        id: 4,
        titulo: "Código Eclipse",
        tipo: "Série",
        generos: ["Ficção Científica","Mistério"],
        duracaoMinutos: 56,    
        temporadas: 4
    },
    { 
        id: 5,
        titulo: "Missão Final",
        tipo: "Filme",
        generos: ["Ação", "Aventura"],
        duracaoMinutos: 120,    
        temporadas: 0
    },
    { 
        id: 6,
        titulo: "Ecos do Amanhã",
        tipo: "Série",
        generos: ["Drama", "Ficção Científica", "Mistério"],
        duracaoMinutos: 215,    
        temporadas: 15
    },
    { 
        id: 7,
        titulo: "O Reino Encantado",
        tipo: "Filme",
        generos: ["Animação", "Família", "Fantasia"],
        duracaoMinutos: 118,    
        temporadas: 0
    },
    { 
        id: 8,
        titulo: "Confusão no Prédio",
        tipo: "Série",
        generos: ["Comédia"],
        duracaoMinutos: 145,    
        temporadas: 9
    },
    { 
        id: 10,
        titulo: "A Mansão da Neblina",
        tipo: "Filme",
        generos: ["Terror", "Suspense"],
        duracaoMinutos: 145,    
        temporadas: 0
    },
    { 
        id: 11,
        titulo: "Corações ao Entardecer",
        tipo: "Filme",
        generos: ["Romance", "Drama"],
        duracaoMinutos: 128,    
        temporadas: 0
    },
    { 
        id: 12,
        titulo: "O Último Feitiço",
        tipo: "Filme",
        generos: ["Fantasia", "Aventura"],
        duracaoMinutos: 122,    
        temporadas: 0
    },
    { 
        id: 13,
        titulo: "Café das Seis",
        tipo: "Série",
        generos: ["Romance", "Comédia"],
        duracaoMinutos: 134,    
        temporadas: 7
    },
    { 
        id: 14,
        titulo: "Ritmo das Ruas",
        tipo: "Série",
        generos: ["Musical", "Comédia"],
        duracaoMinutos: 134,    
        temporadas: 7
    }
];

console.log(catalogo)

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
                titulo: item.titulo,
                tipo: item.tipo,
                compatibilidade: `${percentualCompatibilidade}%`,
                generosComum: generosComum.length === 0 ? "Não" : generosComum,
                generosNaoExplorados: generosNaoExplorados.length === 0 ? "Não" : generosNaoExplorados,
                classificacao
            };
        });
        console.log(compatilibidadeConteudo);
    };
    compatilibidade();