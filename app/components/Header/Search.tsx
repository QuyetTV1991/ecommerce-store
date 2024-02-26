import React from "react";
import { Input } from "../ui/input";

const Search = () => {
  return (
    <div className="flex justify-between items-center gap-4">
      <Input className="rounded-[25px]" />
      <div>Filter</div>
    </div>
  );
};

export default Search;
