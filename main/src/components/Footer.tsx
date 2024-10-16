"use client";
import Image from "next/image";
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
          <div className="font-[syne,_sans-serif] text-[20px] tracking-[1px] leading-[22px] font-bold uppercase">
            Useful links
          </div>
          <ul className="font-[work_sans,_sans-serif] text-[16px] leading-[22px] pt-4">
            <li className="hover:text-[#ff2c2c] font-bold uppercase">
              <Link href="/">Home</Link>
            </li>
            <li className="py-2 hover:text-[#ff2c2c] font-bold uppercase">
              <Link href="/about">About Us</Link>
            </li>
            <li className="hover:text-[#ff2c2c] font-bold uppercase">
              <Link href="/contact">Contact Us</Link>
            </li>
            <li className="pt-2 hover:text-[#ff2c2c] font-bold uppercase">
              <Link href="/news">News</Link>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/3 w-full lg:pt-0 pt-10">
          <div className="font-[syne,_sans-serif] text-[20px] tracking-[1px] leading-[22px] font-bold uppercase">
            address
          </div>
          <div className="flex pt-4 font-[work_sans,_sans-serif] text-[16px] leading-[22px]">
            <span>
              <Image
                src="/img/location.svg"
                alt="phone"
                width={24}
                height={24}
              />
            </span>
            <span className="pl-2 w-full">
              54/6 Soi street 29 (birminghem), Somei district, birminghem 10220
              united kingdom
            </span>
          </div>
          <div className="py-2 font-[work_sans,_sans-serif] text-[16px] leading-[22px] hover:text-[#ff2c2c]">
            <Link href="mailto:bridge@example.com" className="flex">
              <span>
                <Image
                  src="/img/mail.svg"
                  alt="phone"
                  width={24}
                  height={24}
                  className="object-cover"
                />
              </span>
              <span className="pl-2">bridge@example.com</span>
            </Link>
          </div>
          <div className="py-2 font-[work_sans,_sans-serif] text-[16px] leading-[22px] hover:text-[#ff2c2c]">
            <Link href="tel:+17788889999" className="flex">
              {" "}
              <span>
                <Image
                  src="/img/phone.svg"
                  alt="phone"
                  width={24}
                  height={24}
                  className="object-cover"
                />
              </span>
              <span className="pl-2">177 - 88- 89- 99</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
