//# Camada de Integração Externa (fetch nativo). Retorna Promises tipadas com Interfaces.
import { APIError } from "../models/CustomErrors";
import { PokemonApiResponse, PokemonResumo } from "../models/Pokemon";

export class PokeApiService {
  async buscarPokemon(nomeOuId: string): Promise<PokemonResumo | null> {
    try {
      const response: Response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${nomeOuId}`,
      );
      if (!response.ok) {
        throw new APIError(`Erro ao buscar Pokémon`);
      }
      const dados: PokemonApiResponse = await response.json();
      return {
        id: dados.id,
        nome: dados.name,
        tipos: dados.types.map((t) => t.type.name),
        altura: dados.height,
        peso: dados.weight,
      };
    } catch (error) {
      if (error instanceof APIError) {
        throw error;
      }
      throw new APIError("Falha de comunicação com a API");
    }
  }
}
