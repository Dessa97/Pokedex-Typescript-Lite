//# Interfaces/Types e Classes de Entidade. Molde rigoroso dos atributos consumidos da API.

//RF02 – Criar uma interface para o Pokémon resumido
export interface PokemonResumo {
  id: number;
  nome: string;
  tipos: string[];
  altura: number;
  peso: number;
}

//RF03 – Criar uma interface para o retorno da API
export interface PokemonApiResponse {
  id: number;
  name: string;
  types: { type: { name: string } }[];
  height: number;
  weight: number;
}