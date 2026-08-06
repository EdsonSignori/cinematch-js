const prompt = require("prompt-sync")();

let usuario;
let campoObrigatorio = ''; 
do {
    usuario = {
        nome: prompt("Informe seu Nome(*): "), 
        idade: Number(prompt("Informe sua idade: ")), 
        generosFavoritos: prompt("Informe os gêneros que você mais gosta.(Separe por vírgula, ex: Ação, Comédia, Terror)(*): ").split(',').map((g) => g.trim())  
    };
    // IF TERNÁRIO
    //console.log(typeof usuario.nome.trim());
    campoObrigatorio = ((usuario.nome.trim() === '' || usuario.generosFavoritos.every(g => g === '')) ?  console.log(`Obrigatório preencher seu nome e ao menos um gênero que gosta!`) : 'OK');   
} while( campoObrigatorio != 'OK');

console.log(usuario);