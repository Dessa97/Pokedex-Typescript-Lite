"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogoPokemon = void 0;
const textFormatters_1 = require("../utils/textFormatters");
class CatalogoPokemon {
    pokemons = [];
    adicionar(pokemon) {
        // Usar some() para verificar duplicidade
        const jaExiste = this.pokemons.some((item) => item.id === pokemon.id);
        if (jaExiste) {
            console.log(`[AVISO] ${pokemon.nome} já está no catálogo.`);
            return;
        }
        this.pokemons.push(pokemon);
        console.log(`[OK] ${pokemon.nome} adicionado ao catálogo.`);
    }
    listar() {
        if (this.pokemons.length === 0) {
            console.log("[AVISO] Catálogo vazio.");
            return;
        }
        console.log("\n📚 Catálogo Completo:");
        // Usar forEach() para exibir
        this.pokemons.forEach((pokemon) => {
            console.log((0, textFormatters_1.formatPokemonResumo)(pokemon));
        });
    }
    remover(id) {
        // Usar find() para verificar
        const existe = this.pokemons.find((pokemon) => pokemon.id === id);
        if (!existe) {
            console.log("[AVISO] Nenhum Pokémon encontrado com esse ID.");
            return;
        }
        // Usar filter() para remover
        this.pokemons = this.pokemons.filter((pokemon) => pokemon.id !== id);
        console.log("[OK] Pokémon removido do catálogo.");
    }
}
exports.CatalogoPokemon = CatalogoPokemon;
//# sourceMappingURL=BoxServices.js.map