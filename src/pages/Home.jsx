import { useState, useEffect } from "react";
import { Cards } from "../components/Cards";
import { Menu } from "../components/Menu";

import LoadingPokemons from "../components/LoadingPokemons";
import Pagination from "../components/Pagination";
import SelectPokemons from "../components/SelectPokemons";

export function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [itensPerPage, setItensPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(0);

  // Filter to pokemons list teste clone
  const pages = Math.ceil(pokemons.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = pokemons.slice(startIndex, endIndex);

  const fetchPokemons = async () => {
    var endpoints = [];
    for (let i = 1; i <= 354; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    const response = await Promise.all(
      endpoints.map((endpoint) =>
        fetch(endpoint).then(async (res) => await res.json())
      )
    );
    setPokemons(response);
  };

  useEffect(() => {
    setCurrentPage(0);
  }, [itensPerPage]);

  const filteredPokemons = (name) => {
    let filterPokemons = [];
    if (name === "") {
      fetchPokemons();
    }
    for (let i in pokemons) {
      if (pokemons[i].name.includes(name.toLowerCase())) {
        filterPokemons.push(pokemons[i]);
      }
    }
    setPokemons(filterPokemons);
  };

  const darkMode = () => {
    const html = document.querySelector("html");
    const moon = document.getElementById("moon");
    const light = document.getElementById("light");

    moon.classList.toggle("hidden");
    light.classList.toggle("hidden");
    html.classList.toggle("dark");
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <>
      <Menu
        onChange={(e) => filteredPokemons(e.target.value)}
        darkMode={darkMode}
      />
      <SelectPokemons
        itensPerPage={itensPerPage}
        setItensPerPage={setItensPerPage}
      />
      <ul className="max-w-[1500px] grid gap-8 2xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-1 mx-auto my-0">
        {currentItens.length > 0 ? (
          currentItens.map((pokemon, key) => (
            <Cards
              key={key}
              title={pokemon.name}
              types={pokemon.types}
              src={pokemon.sprites.front_default}
            />
          ))
        ) : (
          <LoadingPokemons />
        )}
      </ul>
      <div className="max-w-[1500px] mx-auto my-0 pt-6 pb-4 text-sm sm:text-xl">
        <Pagination
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
}
