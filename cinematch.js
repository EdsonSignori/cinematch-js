const prompt = require("prompt-sync")();

const usuario = {
                    nome: prompt("Informe seu Nome: "), 
                    idade: Number(prompt("Informe sua idade: ")), 
                    generosFavoritos: prompt("Informe os gêneros que você mais gosta.(Separe por vírgula, ex: Ação, Comédia, Terror): ")  
};

console.log(usuario);