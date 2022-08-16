import React from "react";

const Search = (props) => {
  return (
    <div className="p-4">
      <input
        type="text"
        id="first_name"
        className=" text-gray-900 text-sm rounded-lg block w-full p-2.5 shadow-lg text-xl"
        placeholder={props.placeholder}
        onKeyDown={props.func}
      />
    </div>
  );
};

export default Search;
