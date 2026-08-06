# Como executar o projeto

## Pré-requisitos

- Node.js instalado (versão 18 ou superior).

## Instalação

Caso existam dependências no projeto, execute:

```bash
npm install
```

## Execução

Para iniciar a aplicação, execute:

```bash
npm start
```

O script `start` configura automaticamente o terminal do Windows para utilizar a codificação **UTF-8 (Code Page 65001)** antes de iniciar a aplicação. Isso garante o correto funcionamento de caracteres acentuados (á, é, í, ó, ú, ã, õ e ç) durante a entrada e saída de dados no console.

O comando executado é equivalente a:

```cmd
chcp 65001 > nul && node arquivo.js
```

## Observações

- O script `start` foi configurado para ambiente **Windows**.
- Em outros sistemas operacionais (Linux e macOS), execute diretamente:

```bash
node arquivo.js
```
## Tecnologias

- JavaScript (ES6+)
- Node.js
- prompt-sync