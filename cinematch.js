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