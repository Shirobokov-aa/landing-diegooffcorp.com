"use client";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import Informations from "./../../components/Informations";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header />
      <section className="px-5 overflow-hidden">
        <div className="relative w-screen h-screen -z-100 -top-36 -left-5">
          <div>
            <Image
              src="/img/bg-office.jpg"
              alt="banner"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="md:text-8xl text-2xl tracking-[10px] font-bold mb-4 uppercase">
              Contact Us
            </div>
          </div>
        </div>
        <div className=" max-w-7xl mx-auto flex lg:flex-row lg:items-center lg:justify-center flex-col -mt-[200px] pb-20">
          <div className="lg:max-w-[50%] w-full">
            <div className="lg:max-w-80 w-full">
              <div></div>
              <div className="flex pt-5 font-[work_sans,_sans-serif] text-[20px] leading-[22px]">
                <span className="z-10">
                  <Image
                    src="/img/location.svg"
                    alt="phone"
                    width={24}
                    height={24}
                  />
                </span>
                <span className="pl-2 w-full z-10">
                Hong Kong, Tuen Mun, 18 Tin Hai Road, Nan Fung Indastrial City, Unit 704C, 7/F, Block 3
                </span>
              </div>
              <div className="pt-5 font-[work_sans,_sans-serif] text-[20px] leading-[22px] hover:text-[#ff2c2c]">
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
              <div className="pt-5 font-[work_sans,_sans-serif] text-[20px] leading-[22px] hover:text-[#ff2c2c]">
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
          <div className="lg:pt-0 pt-10">
            <div className="bg-img ">
              <Image
                src="/img/news-3.jpg"
                alt="banner"
                width={650}
                height={500}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <Informations />
      <Footer />
    </div>
  );
}
