import React from "react";

const Search = (props) => {
  return (
    <div className="p-4">
      <input
        type="text"
        className=" text-gray-900 text-sm rounded-lg w-full p-2.5 shadow-lg text-xl"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.func}
      />
    </div>
  );
};

export default Search;
