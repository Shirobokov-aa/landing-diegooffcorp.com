"use client";

// import Image from "next/image";
import Link from "next/link";
// import { Mail } from "lucide-react";
// import { Phone } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Header() {
  return (
    <header className="relative z-20">
      <div className=" absolute left-1/2 transform -translate-x-1/2 z-10 w-full flex justify-between pl-6 text-right">
        <div className="logo w-[100px] h-[100px] bg-[#ff2c2c]"></div>
        <div className="flex items-center w-full max-w-[209px] lg:max-w-4xl p-2  bg-[#ff2c2c] justify-center lg:justify-end">
          <ul className="lg:flex lg:space-x-4 hidden text-right">
            <li className="text-[white] font-bold leading-[140%] tracking-[3px] uppercase hover:text-[black] px-[50px]">
              <Link href="/">Home</Link>
            </li>
            <li className="text-[white] font-bold leading-[140%] tracking-[3px] uppercase hover:text-[black] px-[50px]">
              <Link href="/about">About Us</Link>
            </li>
            <li className="text-[white] font-bold leading-[140%] tracking-[3px] uppercase hover:text-[black] px-[50px]">
              <Link href="/contact">Contact Us</Link>
            </li>
            <li className="text-[white] font-bold leading-[140%] tracking-[3px] uppercase hover:text-[black] px-[50px]">
              <Link href="/news">News</Link>
            </li>
          </ul>
          <div className="lg:hidden ">
            <DropdownMenu>
              <DropdownMenuTrigger className="uppercase font-bold">
                Menu
              </DropdownMenuTrigger>
              <DropdownMenuContent className="conten w-52 flex flex-col font-mulish bg-[#1c1c1c] rounded-[0%] border-[#ff2c2c]">
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
