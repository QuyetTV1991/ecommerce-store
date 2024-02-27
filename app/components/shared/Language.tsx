import Image from "next/image";
import React from "react";

const Language = () => {
  return (
    <div className="flex gap-2 items-center flex-row">
      <Image
        src={"/assets/icons/US@2x.svg"}
        alt="flag"
        width={18}
        height={18}
        className="object-contain"
      />
      <p className="text-base text-slate-600">English</p>
      <Image
        src={"/assets/icons/up-chevron.svg"}
        alt="up arrow"
        width={16}
        height={16}
      />
    </div>
  );
};

export default Language;
