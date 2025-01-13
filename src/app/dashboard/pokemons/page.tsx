import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

export const metadata = {
  title: "151 Pokémons",
  description: "Esta es la primera generación de pokémons",
};

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col p-2 items-center">
      <span className="flex items-center gap-4 text-3xl m-2 bg-gray-800 p-4 rounded-lg text-center text-white italic">
        Listado de pokémons<span className="underline">estático</span>
      </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
