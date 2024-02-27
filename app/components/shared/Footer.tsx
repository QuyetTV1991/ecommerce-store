import { FooterLinks, SocialIcons } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Language from "./Language";
import NewsLetter from "./NewsLetter";

const Footer = () => {
  return (
    <footer className="w-full mx-auto bg-slate-200/50">
      <div className="px-4 lg:px-16 py-8">
        <NewsLetter />
      </div>
      <div className="w-full flex flex-row items-start gap-2 bg-white px-4 lg:px-16 py-8">
        <div className="basis-3/12 flex flex-col gap-4">
          <Image
            src={"/assets/icons/logo-colored.svg"}
            alt="logo"
            width={127}
            height={57}
            className="object-contain"
          />
          <p className="text-base text-slate-600">
            Best information about the company gies here but now lorem ipsum is
          </p>
          <div className="flex gap-4">
            {SocialIcons.map((icon, index) => (
              <Link href={icon.route} key={index}>
                <Image
                  src={icon.iconUrl}
                  alt={icon.label}
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="basis-7/12 flex items-start justify-around">
          {FooterLinks.map((link, index) => (
            <div key={index}>
              <h4 className="font-semibold text-base">{link.label}</h4>
              <div className="mt-4 flex flex-col gap-1">
                {link.pages.map((page, index) => (
                  <Link key={index} href={page.route}>
                    <p className="text-base text-slate-400">{page.title}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="basis-2/12">
          <h4 className="font-semibold text-base">App Links</h4>
          <div className="mt-4 flex flex-col gap-2">
            <div className="bg-black w-[95px] h-[35px] rounded-[5px] flex items-center justify-center">
              <Link href={"https://apple.com/app-store"} className="">
                <Image
                  src={"/assets/icons/AppStore.png"}
                  alt="Apple Store"
                  width={85}
                  height={30}
                  className="p-2"
                />
              </Link>
            </div>
            <div className="bg-black w-[95px] h-[35px] rounded-[5px] flex items-center justify-center">
              <Link href={"https://play.google.com"} className="">
                <Image
                  src={"/assets/icons/GooglePlay.png"}
                  alt="Google Play"
                  width={85}
                  height={30}
                  className="p-2"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 lg:px-16 py-8 flex justify-between items-center">
        <p className="text-base text-slate-600">@ 2023 Ecommerce.</p>
        <Language />
      </div>
    </footer>
  );
};

export default Footer;
