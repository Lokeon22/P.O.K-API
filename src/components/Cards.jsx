export function Cards({ title, types, content, getid, src, ...rest }) {
  const getTypes = () => {
    if (types[1]) {
      return types[1].type.name + " | " + types[0].type.name;
    } else {
      return types[0].type.name;
    }
  };

  return (
    <div
      className="flex flex-col items-center relative group mx-auto my-0 bg-gradient-to-r from-yellow-400 to-yellow-500 py-2 rounded-xl text-center cursor-pointer hover:animate-tilt z-10"
      onClick={getid}
    >
      <span className="bg-yellow-600 rounded-full w-28 h-28 absolute opacity-50 -z-10 top-8 left-7"></span>
      <div className="absolute -inset-2 bg-gradient-to-r from-yellow-100 to-blue-600 rounded-xl blur opacity-20 group-hover:opacity-50 transition duration-1000 group-hover:duration-400"></div>
      <img src={src} className="w-44 h-40" {...rest} />
      <h2 className="text-teal-900 capitalize font-bold group-hover:text-gray-700 transition duration-200">
        {title}
      </h2>
      <p className="text-gray-600 text-sm group-hover:text-gray-700 transition duration-200 font-medium">
        {getTypes()}
      </p>
    </div>
  );
}
