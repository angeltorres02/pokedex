"use client";

import { useAppSelector } from "@/store";
import { PokemonCard } from "./PokemonCard";
import { useState } from "react";
import { IoHeartOutline } from "react-icons/io5";

export const PokemonFavoritesGrid = () => {
  const favoritePokemons = useAppSelector((state) =>
    Object.values(state.pokemons)
  );

  const [pokemons] = useState(favoritePokemons);

  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons.length ? (
        pokemons.map((pokemon) => (
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
