export interface PokemonResumo {
    id: number;
    nome: string;
    tipos: string[];
    altura: number;
    peso: number;
}
export interface PokemonApiResponse {
    id: number;
    name: string;
    types: {
        type: {
            name: string;
        };
    }[];
    height: number;
    weight: number;
}
//# sourceMappingURL=Pokemon.d.ts.map