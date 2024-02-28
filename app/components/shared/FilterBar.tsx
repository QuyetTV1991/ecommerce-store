import { Filters } from "@/constant";
import Image from "next/image";
import React from "react";

const FilterBar = () => {
  return (
    <div className="container mx-auto px-4 lg:px-16 border-y-2 py-2 flex items-center justify-between">
      <div className="flex flex-row gap-6">
        {Filters.map((filter, index) => (
          <div
            key={index}
            className="flex flex-row gap-1 cursor-pointer hover:text-slate-600 group"
          >
            {filter.value === "all-category" ? (
              <>
                <Image
                  src={"/assets/icons/menu-hambuger.svg"}
                  alt="hambuger"
                  width={18}
                  height={18}
                />
                <span className="text-sm font-semibold">{filter.label}</span>
              </>
            ) : filter.value === "help" ? (
              <>
                <span className="text-sm font-semibold">{filter.label}</span>
                <Image
                  src={"/assets/icons/down-chevron.svg"}
                  alt="down arrow"
                  width={18}
                  height={18}
                />
              </>
            ) : (
              <span className="text-sm font-semibold">{filter.label}</span>
            )}
          </div>
        ))}
      </div>
      <div className="flex gap-4">
        <div className="flex gap-1 text-sm font-sans">
          English, USD
          <Image
            src={"/assets/icons/down-chevron.svg"}
            alt="down arrow"
            width={18}
            height={18}
          />
        </div>
        <div className="flex gap-1 text-sm font-sans">
          Ship to
          <Image
            src={"/assets/icons/US@2x.svg"}
            alt="country"
            width={24}
            height={24}
          />
          <Image
            src={"/assets/icons/down-chevron.svg"}
            alt="down arrow"
            width={18}
            height={18}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
