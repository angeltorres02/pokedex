import { PokemonFavoritesGrid } from "@/pokemons";

export const metadata = {
  title: "Favoritos",
  description: "Esta es la página donde se muestran tus pokémons favoritos",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col p-2 items-center">
      <span className="flex items-center gap-4 text-3xl m-2 bg-gray-800 p-4 rounded-lg text-center text-white italic">
        Pokémons favoritos<span className="underline">Global state</span>
      </span>
      <PokemonFavoritesGrid />
    </div>
  );
}
