import React from "react";

const SelectPokemons = ({ itensPerPage, setItensPerPage }) => {
  return (
    <div className="flex flex-col items-end px-8 mb-4">
      <span className="text-white mb-2 text-sm dark:text-black">Quantidade de pokemons: </span>
      <select
      className="w-20 outline-0 rounded-t-sm dark:border-black border-2"
        value={itensPerPage}
        onChange={(e) => setItensPerPage(Number(e.target.value))}
      >
        <option value={12}>12</option>
        <option value={18}>18</option>
        <option value={36}>36</option>
        <option value={48}>48</option>
      </select>
    </div>
  );
};

export default SelectPokemons;
