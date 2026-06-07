//# Camada de Persistência Local (node:fs/promises). Aplica métodos funcionais validados pelo TS.
// src/services/BoxServices.ts
import { PokemonResumo } from "../models/Pokemon";

export class CatalogoPokemon {
  private pokemons: PokemonResumo[] = [];

  adicionar(pokemon: PokemonResumo): void {
    // Usar some() para verificar duplicidade
    const jaExiste = this.pokemons.some((item) => item.id === pokemon.id);
    
    if (jaExiste) {
      console.log(`[AVISO] ${pokemon.nome} já está no catálogo.`);
      return;
    }
    
    this.pokemons.push(pokemon);
    console.log(`[OK] ${pokemon.nome} adicionado ao catálogo.`);
  }

  listar(): void {
    if (this.pokemons.length === 0) {
      console.log("[AVISO] Catálogo vazio.");
      return;
    }
    
    // Usar forEach() para exibir
    this.pokemons.forEach((pokemon) => {
      console.log(
        `#${pokemon.id} - ${pokemon.nome} | Tipos: ${pokemon.tipos.join(", ")} | Altura: ${pokemon.altura} | Peso: ${pokemon.peso}`
      );
    });
  }

  remover(id: number): void {
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