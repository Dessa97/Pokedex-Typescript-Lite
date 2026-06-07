"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokeApiService = void 0;
//# Camada de Integração Externa (fetch nativo). Retorna Promises tipadas com Interfaces.
const CustomErrors_1 = require("../models/CustomErrors");
class PokeApiService {
    async buscarPokemon(nomeOuId) {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomeOuId}`);
            if (response.status === 404) {
                console.warn(`Pokémon não encontrado: ${nomeOuId}`);
                return null;
            }
            else if (!response.ok) {
                throw new CustomErrors_1.APIError(`Erro na requisição: ${response.statusText}`);
            }
            const dados = await response.json();
            return {
                id: dados.id,
                nome: dados.name,
                tipos: dados.types.map((t) => t.type.name),
                altura: dados.height,
                peso: dados.weight,
            };
        }
        catch (error) {
            if (error instanceof CustomErrors_1.APIError) {
                throw error;
            }
            throw new CustomErrors_1.APIError("Falha de comunicação com a API");
        }
    }
}
exports.PokeApiService = PokeApiService;
//# sourceMappingURL=PokeApiService.js.map