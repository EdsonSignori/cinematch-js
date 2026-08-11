# CineMatch JS 🎬

> **Mini-Projeto Avaliativo — Módulo 01 (Semana 06)**  
> **Curso:** Programação Desenvolvimento Mobile React Native — Turma 01  
> **Tech Stack:** JavaScript (ES6+), Node.js, `prompt-sync`

---

## 📋 Sobre o Projeto

O **CineMatch JS** é um simulador interativo de motor de recomendação para plataformas de streaming (estilo Netflix, Prime Video ou Spotify), desenvolvido para rodar diretamente via terminal com Node.js.

A aplicação realiza o *onboarding* da pessoa usuária coletando dados de perfil (Nome, Idade e Gêneros Favoritos). Em seguida, analisa de forma dinâmica e em tempo real um catálogo fictício de filmes e séries, calculando percentuais de compatibilidade, identificando gêneros em comum, listando gêneros não explorados e gerando recomendações personalizadas. A navegação ocorre por meio de um menu interativo e robusto.

---

## 🎯 Objetivos de Aprendizagem

Este projeto foi construído para consolidar e demonstrar o domínio prático dos fundamentos essenciais do JavaScript e do fluxo de desenvolvimento moderno:

- **Lógica e Estruturas de Controle:** Condicionais (`if-else`, `switch-case`, operador ternário) e laços de repetição (`do-while`, `for`, `forEach`).
- **Estruturas de Dados:** Manipulação avançada de Arrays e Objetos Literais.
- **Programação Orientada a Objetos (POO):** Classes, Construtores, Herança (`extends`), reuso de métodos com `super` e uso correto do `this`.
- **Métodos Funcionais de Array:** `map`, `filter`, `reduce`, `every`, `forEach`, `includes`, `slice`, `shift`, `push`.
- **Conceitos Avançados de Funções:** *Arrow functions*, *Callbacks* (para controle de fluxo e desacoplamento) e *Closures* (para persistência de estado/contador).
- **Assincronismo:** Uso de `Promises` e `async/await` para simular requisições a serviços de streaming.
- **Entrada e Saída Interativa:** Captura e validação síncrona de dados no terminal usando a biblioteca `prompt-sync`.
- **Ferramental e Processos:** Organização via Kanban, versionamento com Git/GitHub Flow (branches e commits padronizados) e documentação técnica.

---

## 🛠️ Tecnologias, Ferramentas e Extensões

### Tecnologias e Bibliotecas
- **JavaScript (ES6+)**: Linguagem base do projeto.
- **Node.js** (v18+ recomendada): Ambiente de execução fora do navegador.
- **`prompt-sync`**: Pacote NPM para captura síncrona de inputs da pessoa usuária no terminal.

### Editor e Extensões Recomendadas (VS Code)
- **VS Code**: IDE principal utilizada para desenvolvimento e depuração.
- **ESLint**: Linter para padronização e boas práticas de código JavaScript.
- **Prettier - Code formatter**: Formatação automática de código.
- **GitGraph / GitHub Pull Requests and Issues**: Auxílio na visualização e gestão de branches no VS Code.

---

## 🌐 Conceitos Técnicos Aplicados

### Como a Internet Funciona & Arquitetura Cliente-Servidor
Na arquitetura **Cliente-Servidor**, o *Cliente* (navegador, aplicativo mobile ou terminal) envia requisições (*requests*) para o *Servidor*, que processa os dados e envia uma resposta (*response*). 
No **CineMatch JS**, essa interação é simulada através de uma **Promise com `setTimeout`**:
- O método `carregarCatalogo()` simula uma chamada de rede assíncrona com latência de 5 segundos.
- A função `exibirCatalogo()`, declarada com `async/await`, aguarda a resolução dessa *Promise* sem congelar a execução do sistema, reproduzindo exatamente como uma aplicação real aguarda a resposta do servidor de banco de dados.

### Declaração de Variáveis: `var` vs. `let` e `const`
- **`var`**: Possui escopo de função (ou global) e sofre *hoisting* (elevação). Pode levar a bugs difíceis de rastrear por permitir reatribuições indevidas fora do escopo de bloco. **Não utilizada neste projeto**.
- **`let`**: Possui escopo de bloco (`{}`). Ideal para variáveis cujo valor será reatribuído ao longo da execução (ex.: a opção do menu `opcaoMenu` ou contadores).
- **`const`**: Possui escopo de bloco (`{}`) e impede a reatribuição da referência da variável. É a forma prioritária utilizada para declarar funções, objetos, arrays e instâncias de classes no projeto.

---

## ⚡ Como Executar o Projeto

### Pré-requisitos
- **Node.js** instalado (versão 18 ou superior).
- **Git** instalado.

### Passo a Passo

1. **Clonar o repositório:**
   ```bash
   git clone <URL_DO_SEU_REPOSITORIO>
   cd cinematch-js