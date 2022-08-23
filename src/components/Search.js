import React from "react";

const Search = (props) => {
  return (
    <div className="p-4">
      <textarea
        type="text"
        className=" text-gray-900 text-sm rounded-lg p-2.5 shadow-lg text-xl w-full h-full"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.func}
      />
    </div>
  );
};

export default Search;
