import { UserInfoLinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserInfo = () => {
  return (
    <div className="flex flex-2 justify-between gap-6">
      {UserInfoLinks.map((link, index) => (
        <Link
          href={link.route}
          key={index}
          className="flex flex-col items-center"
        >
          <Image
            src={link.icon}
            alt={link.lable}
            width={24}
            height={24}
            className="object-contain"
          />
          <p className="text-gray-500 text-sm mt-1">{link.lable}</p>
        </Link>
      ))}
    </div>
  );
};

export default UserInfo;
