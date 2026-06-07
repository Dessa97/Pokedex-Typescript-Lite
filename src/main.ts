//# Ponto de entrada. Instancia os serviços, injeta as dependências e inicia o loop principal do menu.
import { CatalogoPokemon } from "./services/BoxServices";
import { PokeApiService } from "./services/PokeApiService";
async function main() {
const catalogo = new CatalogoPokemon();
const pokeApi = new PokeApiService();
const pikachu = await pokeApi.buscarPokemon("pikachu");
if (pikachu !== null) {
catalogo.adicionar(pikachu);
}
const charmander = await pokeApi.buscarPokemon("charmander");
if (charmander !== null) {
catalogo.adicionar(charmander);
}
const pikachuDuplicado = await pokeApi.buscarPokemon("pikachu");
if (pikachuDuplicado !== null) {
catalogo.adicionar(pikachuDuplicado);
}
await pokeApi.buscarPokemon("pokemon-inexistente");
catalogo.listar();
catalogo.remover(25);
catalogo.listar();
}
main();