import React from "react";
import { Input } from "../ui/input";

const Search = () => {
  return (
    <div className="flex justify-between items-center gap-4 px-10 mx-8">
      <Input
        className="rounded-[10px] text-gray-400 border border-blue-600 border-solid"
        placeholder="Search"
      />
      <div>Filter</div>
    </div>
  );
};

export default Search;
