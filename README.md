# Pokédex TypeScript Lite

## Sobre o projeto

O Pokédex TypeScript Lite é uma aplicação simples em Node.js com TypeScript que consulta dados de Pokémon na PokeAPI e organiza alguns resultados em um catálogo local durante a execução do programa.

## Objetivo

Praticar os principais conceitos do Módulo 01:

- Node.js;
- JavaScript no back-end;
- TypeScript;
- interfaces;
- funções tipadas;
- arrays;
- objetos;
- JSON;
- métodos de array;
- classes;
- async/await;
- fetch;
- tratamento de erros;
- GitHub;
- GitFlow;
- Kanban.

## Tecnologias utilizadas

- **Node.js** - Runtime JavaScript no back-end
- **TypeScript** - Linguagem com tipagem forte
- **TSX** - Executor de TypeScript para desenvolvimento
- **PokeAPI** - API pública de dados de Pokémon
- **Git** - Controle de versionamento

## Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

- Node.js (versão 16 ou superior)
- npm (gerenciador de pacotes)
- Git

Verifique as instalações com:
```bash
node --version
npm --version
git --version
```

## Como instalar

Clone o repositório:

```bash
git clone https://github.com/Dessa97/Pokedex-Typescript-Lite.git
```

Acesse a pasta do projeto:

```bash
cd Pokedex-Typescript-Lite
```

Instale as dependências:

```bash
npm install
```

## Como executar

### Opção 1: Modo Desenvolvimento (Recomendado)

Execute o projeto diretamente com TypeScript (mais rápido):

```bash
npm run dev
```

### Opção 2: Modo Produção

Compile o TypeScript e execute:

```bash
npm run build
npm run start
```

## Estrutura do projeto

```
pokedex-typescript-lite/
│
├── src/
│   ├── main.ts                    # Ponto de entrada principal
│   │
│   ├── controllers/
│   │   └── TerminalController.ts  # Interface do usuário e orquestra exibições
│   │
│   ├── services/
│   │   ├── PokeApiService.ts      # Integração com PokeAPI
│   │   └── BoxServices.ts         # Gerenciamento do catálogo com CatalogoPokemon
│   │
│   ├── models/
│   │   ├── Pokemon.ts             # Interfaces e tipos
│   │   └── CustomErrors.ts        # Classes de erro customizadas
│   │
│   └── utils/
│       └── textFormatters.ts      # Funções utilitárias de formatação
│
├── dist/                          # Arquivos compilados (gerado por npm run build)
├── package.json                   # Dependências do projeto
├── tsconfig.json                  # Configuração do TypeScript
└── README.md                       # Este arquivo
```

## Funcionalidades

- ✅ Buscar Pokémon por nome ou ID na PokeAPI
- ✅ Tratar erro quando Pokémon não existe
- ✅ Transformar resposta da API em objeto simplificado (PokemonResumo)
- ✅ Adicionar Pokémon ao catálogo local
- ✅ Impedir adição de Pokémon duplicado
- ✅ Listar todos os Pokémon no catálogo com formatação padronizada
- ✅ Remover Pokémon do catálogo pelo ID
- ✅ Exibir mensagens claras e bem formatadas no terminal

## Exemplos de execução

### Exemplo 1: Busca Válida

**Entrada testada:**
```
pikachu
```

**Saída obtida:**
```
[BUSCANDO] pikachu...
[OK] Pokémon encontrado: pikachu
-----------------------------
ID: 25
Nome: pikachu
Tipos: electric
Altura: 4 
Peso: 60 
-----------------------------
[OK] pikachu adicionado ao catálogo.
```

### Exemplo 2: Busca Inválida

**Entrada testada:**
```
pokemon-inexistente
```

**Saída obtida:**
```
[BUSCANDO] pokemon-inexistente...
Pokémon não encontrado: pokemon-inexistente
```

### Exemplo 3: Bloqueio de Duplicidade

**Entrada testada:**
```
Buscar e adicionar pikachu duas vezes
```

**Saída obtida (segunda tentativa):**
```
[BUSCANDO] pikachu...
[OK] Pokémon encontrado: pikachu
-----------------------------
ID: 25
Nome: pikachu
Tipos: electric
Altura: 4 
Peso: 60 
-----------------------------
[AVISO] pikachu já está no catálogo.
```

### Exemplo 4: Listagem e Remoção

**Entrada testada:**
```
Listar catálogo e remover ID 25
```

**Saída obtida:**
```
📚 Catálogo Completo:
-----------------------------
ID: 25
Nome: pikachu
Tipos: electric
Altura: 4 
Peso: 60 
-----------------------------
-----------------------------
ID: 4
Nome: charmander
Tipos: fire
Altura: 6 
Peso: 85 
-----------------------------
[OK] Pokémon removido do catálogo.

📚 Catálogo Completo:
-----------------------------
ID: 4
Nome: charmander
Tipos: fire
Altura: 6 
Peso: 85 
-----------------------------
```

## Conceitos aplicados

### TypeScript

- **Interfaces**: Criadas `PokemonResumo` e `PokemonApiResponse` para tipagem dos dados
- **Tipos genéricos**: Retorno `Promise<PokemonResumo | null>` para funções assíncronas
- **Classes**: `CatalogoPokemon`, `PokeApiService`, `TerminalController`, `APIError`, `LocalBoxError`
- **Modificadores de acesso**: `private` para atributos da classe
- **Parâmetros tipados**: Todas as funções possuem tipos explícitos

### Interface PokemonResumo

Define a estrutura simplificada do Pokémon utilizado internamente:
```typescript
export interface PokemonResumo {
  id: number;
  nome: string;
  tipos: string[];
  altura: number;
  peso: number;
}
```

### Fetch e async/await

A aplicação consulta a PokeAPI usando `fetch` nativo do Node.js:
```typescript
const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomeOuId}`);
const dados = await response.json();
```

### Tratamento de erros

O projeto utiliza `try/catch` para capturar erros de rede e API:
```typescript
try {
  // busca na API
} catch (error) {
  if (error instanceof APIError) {
    console.log(`[ERRO] Pokémon não encontrado`);
  }
}
```

### Métodos de array

Projeto utiliza **4 métodos de array**:
- **`some()`** - Verificar duplicidade antes de adicionar
- **`forEach()`** - Listar todos os Pokémon do catálogo
- **`find()`** - Verificar se Pokémon existe antes de remover
- **`filter()`** - Remover Pokémon do array pelo ID

### Classe TerminalController

Orquestra a interface do usuário e a busca de Pokémon:
- `constructor()` - Inicializa PokeApiService
- `async buscarPokemon(nomeOuId)` - Busca na API e exibe com formatação usando `formatPokemonResumo()`

### Função formatPokemonResumo

Localizada em `textFormatters.ts`, formata a exibição de um Pokémon com separadores:
```typescript
export function formatPokemonResumo(pokemon: PokemonResumo): string
```

Utilizada em:
- `TerminalController.buscarPokemon()` - Para exibir detalhes quando encontra um Pokémon
- `CatalogoPokemon.listar()` - Para exibir cada item do catálogo

### Classe CatalogoPokemon

Gerencia o catálogo com 3 métodos principais:
- `adicionar(pokemon)` - Adiciona com validação de duplicidade usando `some()`
- `listar()` - Exibe todos os Pokémon salvos com `forEach()` e formatação
- `remover(id)` - Remove Pokémon pelo ID usando `find()` e `filter()`

## Organização do Kanban

Link do Kanban: (https://trello.com/b/rH6PJgl9/pokedex-typescript-lite)

Colunas utilizadas:
- **Backlog** - Tarefas futuras
- **A Fazer** - Tarefas prontas para começar
- **Em Andamento** - Tarefas sendo desenvolvidas
- **Concluído** - Tarefas finalizadas

## Branches utilizadas

- `main` - Branch principal (produção)
- `develop` - Branch de desenvolvimento
- `feat/services` - Implementação das funcionalidades
- `docs/readme` - Documentação

## Fluxo de versionamento

O projeto segue o padrão de commits semânticos:

```
feat: configura projeto com typescript
feat: cria interfaces de pokemon
feat: implementa busca na pokeapi
feat: cria classe de catalogo
feat: adiciona validacao de duplicidade
fix: trata pokemon inexistente
docs: atualiza readme com instrucoes
```

## Melhorias futuras

- [ ] Criar menu interativo no terminal com `readline`
- [ ] Salvar catálogo em arquivo JSON (`pc_box.json`)
- [ ] Exibir HP, Ataque e Defesa do Pokémon
- [ ] Criar filtros por tipo de Pokémon
- [ ] Criar uma API própria com Express.js
- [ ] Adicionar testes unitários com Jest
- [ ] Implementar persistência de dados

## Autor

Andressa de Oliveira para o curso "Desenvolvedor(a) Back End Node" - SCTEC

## Licença

ISC