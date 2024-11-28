"use client";
import Image from "next/image";
import Link from "next/link";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

function Header() {
  return (
    <header className="relative z-20 max-w-[1440px] mx-auto px-5">
      <div className=" absolute left-1/2 transform -translate-x-1/2 z-10 w-full h-[100px] flex items-center justify-between pl-6 text-right">
        <Link href="/" className="logo">
          <Image src="/img/logo.svg" alt="logo" width={135} height={45} />
        </Link>
        <div className="flex items-center w-full max-w-[209px] lg:max-w-4xl p-10  bg-[#ff2c2c] justify-center lg:justify-end">
          <ul className="lg:flex lg:space-x-4 hidden text-right">
            <li className="text-[white] font-bold leading-[140%] xl:tracking-[3px] tracking-[0px] uppercase hover:text-[black] px-[50px]">
              <Link href="/">Home</Link>
            </li>
            <li className="text-[white] font-bold leading-[140%] xl:tracking-[3px] tracking-[0px] uppercase hover:text-[black] px-[50px]">
              <Link href="/about">About Us</Link>
            </li>
            <li className="text-[white] font-bold leading-[140%] xl:tracking-[3px] tracking-[0px] uppercase hover:text-[black] px-[50px]">
              <Link href="/contact">Contact Us</Link>
            </li>
            <li className="text-[white] font-bold leading-[140%] xl:tracking-[3px] tracking-[0px] uppercase hover:text-[black] px-[50px]">
              <Link href="/news">News</Link>
            </li>
          </ul>
          <div className="lg:hidden ">
            <Drawer>
              <DrawerTrigger>
                <div className="space-y-1">
                  <span className="block w-5 h-0.5 bg-white"></span>
                  <span className="block w-5 h-0.5 bg-white"></span>
                  <span className="block w-5 h-0.5 bg-white"></span>
                </div>
              </DrawerTrigger>
              <DrawerContent className="h-[70%] w-screen bg-black/70 border-none">
                <DrawerHeader>
                  <div className="text-left">
                    <ul className="text-subH1 text-white uppercase">
                      <div className="border-t relative -left-4 border-white w-full"></div>
                      <li className="py-8 w-screen">
                        <Link href={"/"}>Home</Link>
                      </li>
                      <div className="border-t relative -left-4 border-white w-full"></div>
                      <li className="py-8 w-screen">
                        <Link href={"/about"}>About Us</Link>
                      </li>
                      <div className="border-t relative -left-4 border-white w-full"></div>
                      <li className="py-8 w-screen">
                        <Link href={"/contact"}>Contact Us</Link>
                      </li>
                      <div className="border-t relative -left-4 border-white w-full"></div>
                      <li className="py-8 w-screen">
                        <Link href={"/news"}>News</Link>
                      </li>
                      <div className="border-t relative -left-4 border-white w-full"></div>
                    </ul>
                  </div>
                  <DrawerTitle></DrawerTitle>
                  <DrawerDescription></DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <button className="outline-button">
                      <div className="relative left-[46%] w-10 h-10 cursor-pointer ">
                        <span className="absolute top-1/2 left-0 w-full h-1 bg-white transform -translate-y-1/2 rotate-45"></span>
                        <span className="absolute top-1/2 left-0 w-full h-1 bg-white transform -translate-y-1/2 -rotate-45"></span>
                      </div>
                    </button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
