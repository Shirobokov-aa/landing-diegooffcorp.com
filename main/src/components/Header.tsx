"use client";
import Image from "next/image";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Header() {
  return (
    <header className="relative z-20">
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
            <DropdownMenu>
              <DropdownMenuTrigger className="uppercase font-bold">
                Menu
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-52 flex flex-col font-mulish bg-[#1c1c1c] rounded-[0%] border-[#ff2c2c]">
                <DropdownMenuItem>
                  <Link href="/" className="text-[#ff2c2c] font-bold">
                    Home
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/about" className="text-[#ff2c2c] font-bold">
                    About Us
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/contact" className="text-[#ff2c2c] font-bold">
                    Contact Us
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/news" className="text-[#ff2c2c] font-bold">
                    News
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
