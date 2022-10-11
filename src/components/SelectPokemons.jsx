import React from "react";

const SelectPokemons = ({ itensPerPage, setItensPerPage }) => {
  return (
    <div>
      <select
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
