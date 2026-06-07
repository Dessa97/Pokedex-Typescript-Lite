"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSeparator = createSeparator;
exports.formatPokemonResumo = formatPokemonResumo;
function createSeparator() {
    return "-----------------------------";
}
function formatPokemonResumo(pokemon) {
    return `${createSeparator()}
ID: ${pokemon.id}
Nome: ${pokemon.nome}
Tipos: ${pokemon.tipos.join(", ")}
Altura: ${pokemon.altura} 
Peso: ${pokemon.peso} 
${createSeparator()}`;
}
//# sourceMappingURL=textFormatters.js.map