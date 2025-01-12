import { Pokemon } from "@/pokemons";
import { Metadata } from "next";

interface PokemonPageProps {
  params: { id: string };
}

export async function generateMetadata({
  params,
}: PokemonPageProps): Promise<Metadata> {
  const { id, name } = await getPokemon(params.id);

  return {
    title: `#${id} - ${name}`,
    description: `Página del pokémon ${name}`,
  };
}

const getPokemon = async (id: string): Promise<Pokemon> => {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: "force-cache",
  }).then((resp) => resp.json());

  console.log("Se cargó a: ", pokemon.name);

  return pokemon;
};

export default async function PokemonPage({ params }: PokemonPageProps) {
  const pokemon = await getPokemon(params.id);

  return (
    <div>
      <h1>Pokémon {params.id}</h1>
      <div className="capitalize">{pokemon.name}</div>
    </div>
  );
}
