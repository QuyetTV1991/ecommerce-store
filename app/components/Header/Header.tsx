import Image from "next/image";
import Link from "next/link";
import React from "react";
import UserInfo from "./UserInfo";
import Search from "./Search";

const Header = () => {
  return (
    <header className="flex items-center justify-between max-w-[1280px] mx-auto my-4 sm:mx-6">
      {/* Sidebar for Mobile */}
      <Link href={"/"} className="flex-1">
        <Image
          src={"/assets/icons/logo-colored.svg"}
          alt="logo"
          width={127}
          height={55}
        />
      </Link>
      <div className="flex-1">
        <Search />
      </div>
      <UserInfo />
    </header>
  );
};

export default Header;
