"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function Informations() {
  return (
    <div className="block_red flex lg:flex-row flex-col items-center justify-around bg-[#ff2c2c] w-full">
      <div className="title_follow font-[syne,_sans-serif] xl:text-[23px] text-lg leading-[28px] font-bold tracking-[1px] uppercase ml-4">
        UPDATED ROUTE SCHEDULE AND OTHER ESSENTIAL INFORMATIONS.
      </div>
      <Button
        variant="outline"
        className="bg-white text-[16px] font-bold text-[#ff2c2c] px-[45px] py-[30px] hover:bg-black hover:text-white uppercase my-7 rounded-none border-0 mr-4"
      >
        <Link href="/contact">Contact Us</Link>
      </Button>
    </div>
  );
}

export default Informations;
