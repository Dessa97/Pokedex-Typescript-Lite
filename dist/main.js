"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//# Ponto de entrada. Instancia os serviços, injeta as dependências e inicia o loop principal do menu.
const BoxServices_1 = require("./services/BoxServices");
const TerminalController_1 = require("./controllers/TerminalController");
async function main() {
    const catalogo = new BoxServices_1.CatalogoPokemon();
    const terminal = new TerminalController_1.TerminalController();
    const pikachu = await terminal.buscarPokemon("pikachu");
    if (pikachu !== null) {
        catalogo.adicionar(pikachu);
    }
    const charmander = await terminal.buscarPokemon("charmander");
    if (charmander !== null) {
        catalogo.adicionar(charmander);
    }
    const pikachuDuplicado = await terminal.buscarPokemon("pikachu");
    if (pikachuDuplicado !== null) {
        catalogo.adicionar(pikachuDuplicado);
    }
    await terminal.buscarPokemon("pokemon-inexistente");
    catalogo.listar();
    catalogo.remover(25);
    catalogo.listar();
}
main();
//# sourceMappingURL=main.js.map