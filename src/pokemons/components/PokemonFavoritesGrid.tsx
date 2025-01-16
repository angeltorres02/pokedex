"use client";

import { useAppSelector } from "@/store";
import { PokemonCard } from "./PokemonCard";
import { IoHeartOutline } from "react-icons/io5";

export const PokemonFavoritesGrid = () => {
  const favoritePokemons = useAppSelector((state) =>
    Object.values(state.pokemons.favorites)
  );

  // const [pokemons, setPokemons] = useState(Object.values(favoritePokemons));

  // useEffect(() => {
  //   // setPokemons(favoritePokemons);
  // }, [favoritePokemons]);

  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {favoritePokemons.length ? (
        favoritePokemons.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))
      ) : (
        <NoFavorites />
      )}
    </div>
  );
};

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>No hay favoritos</span>
    </div>
  );
};
