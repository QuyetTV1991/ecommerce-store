import React from "react";
import { Input } from "../ui/input";
import Image from "next/image";
import { Button } from "../ui/button";

const NewsLetter = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-2">
      <h3 className="font-semibold text-lg">Subscrible on our newsletter</h3>
      <p className="text-sm text-slate-500">
        Get daily news on upcoming offers from many suppliers oall over the
        world
      </p>
      <div className="flex gap-2">
        <div className="flex bg-white px-2 outline-2">
          <Image
            src={"/assets/icons/email.svg"}
            alt="mail"
            width={24}
            height={24}
            className="object-contain"
          />
          <Input
            type="email"
            placeholder="Email"
            className="border-none text-slate-500 focus-visible:ring-transparent focus-visible:ring-offset-0"
          />
        </div>
        <Button className="px-8 rounded-2xl">Subscrible</Button>
      </div>
    </div>
  );
};

export default NewsLetter;
