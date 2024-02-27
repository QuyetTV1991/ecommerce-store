import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Filter from "./Filter";

const Search = () => {
  return (
    <div className="flex justify-between items-center mx-8 border-2 border-solid border-blue-500 rounded-lg">
      <Input
        className="text-gray-400 border-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
        placeholder="Search"
      />
      <Filter />
      <Button className="bg-blue-500 rounded-none">Search</Button>
    </div>
  );
};

export default Search;
