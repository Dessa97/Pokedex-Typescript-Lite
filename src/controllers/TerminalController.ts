//# Camada de Interface do Usuário. Gerencia entrada do terminal e orquestra exibições.
import { PokeApiService } from "../services/PokeApiService";
import { formatPokemonResumo } from "../utils/textFormatters";
import { PokemonResumo } from "../models/Pokemon";

export class TerminalController {
  private pokeApiService: PokeApiService;

  constructor() {
    this.pokeApiService = new PokeApiService();
  }

  async buscarPokemon(nomeOuId: string): Promise<PokemonResumo | null> {
    console.log(`\n[BUSCANDO] ${nomeOuId}...`);
    
    try {
      const pokemon = await this.pokeApiService.buscarPokemon(nomeOuId);
      
      if (pokemon !== null) {
        console.log(`[OK] Pokémon encontrado: ${pokemon.nome}`);
        console.log(formatPokemonResumo(pokemon));
        return pokemon;
      }
      
      return null;
    } catch (error) {
      console.log(`[ERRO] Erro ao buscar Pokémon: ${nomeOuId}`);
      return null;
    }
  }
}
