import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export function Details() {
  const { name } = useParams();

  const [pokemon, setPokemon] = useState([]);

  const singlePokemon = async () => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(
      (res) => res.json()
    );

    let teste = data.name;
    let nome = teste.charAt(0).toUpperCase() + teste.slice(1);

    const pokemon = {
      name: nome,
      height: data.height,
      imgURL: data.sprites.other.dream_world.front_default,
      hp: data.stats[0].base_stat,
      attack: data.stats[1].base_stat,
      defense: data.stats[2].base_stat,
      speed: data.stats[5].base_stat,
    };

    setPokemon(pokemon);
  };

  useEffect(() => {
    singlePokemon();
  }, []);

  return (
    <section>
      <Link to="/">
        <p className="text-white dark:text-black fixed text-2xl px-3 py-3 md:text-3xl md:px-8 md:py-8">
          Voltar
        </p>
      </Link>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="text-white dark:text-black md:flex md:items-center md:gap-4">
          <img src={pokemon.imgURL} width="400px" />
          <ul className="flex flex-col gap-1 text-xl">
            <li className="text-5xl mb-2">{pokemon.name}</li>
            <li>Peso: {pokemon.height}</li>
            <li className="text-red-800">Ataque: {pokemon.attack}</li>
            <li className="text-blue-800">Defesa: {pokemon.defense}</li>
            <li>HP: {pokemon.hp}</li>
            <li>Velocidade: {pokemon.speed}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
