"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Footer() {
  return (
    <footer className="max-w-[1440px] mx-auto px-5 lg:pt-24 pt-10 pb-20">
      <div className="flex lg:flex-row flex-col">
        <div className="lg:w-1/3 w-full">
          <div>
            <Link href="/">
              <Image src="/img/logo.svg" alt="logo" width={135} height={45} />
            </Link>
          </div>
        </div>
        <div className="lg:w-1/3 w-full lg:pt-0 pt-10">
          <div className="font-[syne,_sans-serif] text-[16px] tracking-[1px] leading-[22px] font-bold uppercase">
            Useful links
          </div>
          <ul className="font-[work_sans,_sans-serif] text-[16px] leading-[22px] pt-4">
            <li className="hover:text-[#ff2c2c]">
              <Link href="/">Home</Link>
            </li>
            <li className="py-2 hover:text-[#ff2c2c]">
              <Link href="/about">About Us</Link>
            </li>
            <li className="hover:text-[#ff2c2c]">
              <Link href="/contact">Contact Us</Link>
            </li>
            <li className="pt-2 hover:text-[#ff2c2c]">
              <Link href="/news">News</Link>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/3 w-full lg:pt-0 pt-10">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
            voluptate soluta harum, nemo saepe inventore eveniet praesentium
            tenetur consectetur dolores fuga excepturi veniam earum quos error
            sapiente deserunt libero animi.
          </div>
          <Button
            variant="outline"
            className="bg-[#ff2c2c] text-[16px] font-bold text-white px-[45px] py-[30px] hover:bg-white hover:text-black uppercase mt-5 rounded-none border-0"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
