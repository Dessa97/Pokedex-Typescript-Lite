//# Funções utilitárias puras com tipagem explícita de parâmetros e retorno.
import { PokemonResumo } from "../models/Pokemon";

export function createSeparator(): string {
  return "-----------------------------";
}

export function formatPokemonResumo(pokemon: PokemonResumo): string {
  return `${createSeparator()}
ID: ${pokemon.id}
Nome: ${pokemon.nome}
Tipos: ${pokemon.tipos.join(", ")}
Altura: ${pokemon.altura} 
Peso: ${pokemon.peso} 
${createSeparator()}`;
}
