"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TerminalController = void 0;
//# Camada de Interface do Usuário. Gerencia entrada do terminal e orquestra exibições.
const PokeApiService_1 = require("../services/PokeApiService");
const textFormatters_1 = require("../utils/textFormatters");
class TerminalController {
    pokeApiService;
    constructor() {
        this.pokeApiService = new PokeApiService_1.PokeApiService();
    }
    async buscarPokemon(nomeOuId) {
        console.log(`\n[BUSCANDO] ${nomeOuId}...`);
        try {
            const pokemon = await this.pokeApiService.buscarPokemon(nomeOuId);
            if (pokemon !== null) {
                console.log(`[OK] Pokémon encontrado: ${pokemon.nome}`);
                console.log((0, textFormatters_1.formatPokemonResumo)(pokemon));
                return pokemon;
            }
            return null;
        }
        catch (error) {
            console.log(`[ERRO] Erro ao buscar Pokémon: ${nomeOuId}`);
            return null;
        }
    }
}
exports.TerminalController = TerminalController;
//# sourceMappingURL=TerminalController.js.map