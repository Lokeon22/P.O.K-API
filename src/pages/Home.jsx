import { useState, useEffect } from "react";
import { Cards } from "../components/Cards";

import LoadingPokemons from "../components/LoadingPokemons";
import Pagination from "../components/Pagination";
import SelectPokemons from "../components/SelectPokemons";

import moon from "../assets/moon.svg";
import light from "../assets/light.svg";

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
    console.log(response);
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

  useEffect(() => {
    fetchPokemons();
  }, []);

  const darkMode = () => {
    const html = document.querySelector("html");
    const moon = document.getElementById("moon");
    const light = document.getElementById("light");

    moon.classList.toggle("hidden");
    light.classList.toggle("hidden");
    html.classList.toggle("dark");
  };

  return (
    <>
      <section className="w-full bg-black dark:bg-slate-200 flex justify-between items-center py-4 px-4 mb-8 shadow-lg shadow-white/40 dark:shadow-black/40">
        <h1 className="text-white text-sm sm:text-xl dark:text-black">
          Pokemon
        </h1>
        <div className="flex items-center justify-center gap-4">
          <img
            src={moon}
            className="w-5 ml-3 sm:w-6 sm:ml-0 invert cursor-pointer"
            id="moon"
            onClick={darkMode}
          />
          <img
            src={light}
            className="w-5 ml-3 sm:w-6 sm:ml-0 hidden cursor-pointer"
            id="light"
            onClick={darkMode}
          />
          <input
            type="text"
            placeholder="Search"
            className="outline-none px-1 sm:px-2 text-xs py-1 rounded dark:border-2 border-black"
            onChange={(e) => filteredPokemons(e.target.value)}
          />
        </div>
      </section>
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
