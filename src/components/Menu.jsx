import moon from "../assets/moon.svg";
import light from "../assets/light.svg";

export const Menu = ({ filteredPokemon, darkMode, ...rest }) => {
  return (
    <section className="w-full bg-black dark:bg-slate-200 flex justify-between items-center py-4 px-4 mb-8 shadow-lg shadow-white/40 dark:shadow-black/40">
      <h1 className="text-white text-sm sm:text-xl dark:text-black">Pokemon</h1>
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
          onChange={filteredPokemon}
          {...rest}
        />
      </div>
    </section>
  );
};
