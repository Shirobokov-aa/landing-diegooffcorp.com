"use client";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import Informations from "./../../components/Informations";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <section className="max-w-[1440px] mx-auto px-5">
        <div className="pt-[200px]">
          <div className="font-[syne,_sans-serif] text-[42px] leading-[51px] font-extrabold tracking-[3px] uppercase">
            Latest News
          </div>
          <div className="flex items-center justify-center">
            <div className="font-[work_sans,_sans-serif] text-[23px] leading-[27px]">
              Find out what is our expertise
            </div>
            <div className="w-[50px] mx-auto h-[3px] bg-[#ff2c2c] ml-5 xl:block hidden"></div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col pt-20">
          <div className="lg:max-w-[33%] w-full mr-10 group">
            <div>
              <Image
                src="/img/news-1.jpg"
                alt="news"
                width={500}
                height={300}
                className="object-cover filter grayscale group-hover:filter-none transition-all duration-300"
              />
            </div>
            <div className="py-[20px] font-['Work_Sans',_sans-serif] text-[16px] leading-[22px]">
              11 May, 2021
            </div>
            <div className="font-[syne,_sans-serif] text-[19px] leading-[26px] font-bold tracking-[1px] uppercase group-hover:text-[#ff2c2c] transition-all duration-300">
              SkyCargo marks key freighter anniversaries
            </div>
            <div className="font-[work_sans,_sans-serif] text-[16px] leading-[22px] mt-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
              orci id urna ultricies cursus quis eu augu
            </div>
          </div>
          <div className="lg:max-w-[33%] lg:pt-0 pt-10 w-full mr-10 group">
            <div className="news_img ">
              <Image
                src="/img/news-2.jpg"
                alt="news"
                width={500}
                height={300}
                className="object-cover filter grayscale group-hover:filter-none transition-all duration-300"
              />
            </div>
            <div className="py-[20px] font-['Work_Sans',_sans-serif] text-[16px] leading-[22px]">
              11 May, 2021
            </div>
            <div className="font-[syne,_sans-serif] text-[19px] leading-[26px] font-bold tracking-[1px] uppercase group-hover:text-[#ff2c2c] transition-all duration-300">
              Transportation coordinated by qualified staff
            </div>
            <div className="font-[work_sans,_sans-serif] text-[16px] leading-[22px] mt-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
              orci id urna ultricies cursus quis eu augu
            </div>
          </div>
          <div className="lg:max-w-[33%] lg:pt-0 pt-10 w-full mr-10 group">
            <div>
              <Image
                src="/img/news-3.jpg"
                alt="news"
                width={500}
                height={300}
                className="object-cover filter grayscale group-hover:filter-none transition-all duration-300"
              />
            </div>
            <div className="py-[20px] font-['Work_Sans',_sans-serif] text-[16px] leading-[22px]">
              11 May, 2021
            </div>
            <div className="font-[syne,_sans-serif] text-[19px] leading-[26px] font-bold tracking-[1px] uppercase group-hover:text-[#ff2c2c] transition-all duration-300">
              An innovative service for easy & Fast shipments
            </div>
            <div className="font-[work_sans,_sans-serif] text-[16px] leading-[22px] mt-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
              orci id urna ultricies cursus quis eu augu
            </div>
          </div>
        </div>
        <div className="flex w-full py-20">
          <div className="w-full">
            <div className="lg:mr-10 mr-0 flex lg:flex-row flex-col group">
              <div className="lg:max-w-[50%] w-full">
                <Image
                  src="/img/news-4.jpg"
                  alt="news"
                  width={700}
                  height={500}
                  className="object-cover filter grayscale group-hover:filter-none transition-all duration-300"
                />
              </div>
              <div className="lg:max-w-[50%] w-full lg:pl-20 pl-0">
                <div className="py-[20px] font-['Work_Sans',_sans-serif] text-[16px] leading-[22px]">
                  11 May, 2021
                </div>
                <div className="font-[syne,_sans-serif] text-[19px] leading-[26px] font-bold tracking-[1px] uppercase group-hover:text-[#ff2c2c] transition-all duration-300">
                  SkyCargo marks key freighter anniversaries
                </div>
                <div className="font-[work_sans,_sans-serif] text-[16px] leading-[22px] mt-[20px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
                  orci id urna ultricies cursus quis eu augu
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col pb-20">
          <div className="lg:max-w-[33%] w-full mr-10 group">
            <div>
              <Image
                src="/img/news-5.jpg"
                alt="news"
                width={500}
                height={300}
                className="object-cover filter grayscale group-hover:filter-none transition-all duration-300"
              />
            </div>
            <div className="py-[20px] font-['Work_Sans',_sans-serif] text-[16px] leading-[22px]">
              11 May, 2021
            </div>
            <div className="font-[syne,_sans-serif] text-[19px] leading-[26px] font-bold tracking-[1px] uppercase group-hover:text-[#ff2c2c] transition-all duration-300">
              SkyCargo marks key freighter anniversaries
            </div>
            <div className="font-[work_sans,_sans-serif] text-[16px] leading-[22px] mt-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
              orci id urna ultricies cursus quis eu augu
            </div>
          </div>
          <div className="lg:max-w-[33%] lg:pt-0 pt-10 w-full mr-10 group">
            <div>
              <Image
                src="/img/news-6.jpg"
                alt="news"
                width={500}
                height={300}
                className="object-cover filter grayscale group-hover:filter-none transition-all duration-300"
              />
            </div>
            <div className="py-[20px] font-['Work_Sans',_sans-serif] text-[16px] leading-[22px]">
              11 May, 2021
            </div>
            <div className="font-[syne,_sans-serif] text-[19px] leading-[26px] font-bold tracking-[1px] uppercase group-hover:text-[#ff2c2c] transition-all duration-300">
              Transportation coordinated by qualified staff
            </div>
            <div className="font-[work_sans,_sans-serif] text-[16px] leading-[22px] mt-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
              orci id urna ultricies cursus quis eu augu
            </div>
          </div>
          <div className="lg:max-w-[33%] lg:pt-0 pt-10 w-full mr-10 group">
            <div>
              <Image
                src="/img/news-7.jpg"
                alt="news"
                width={500}
                height={300}
                className="object-cover filter grayscale group-hover:filter-none transition-all duration-300"
              />
            </div>
            <div className="py-[20px] font-['Work_Sans',_sans-serif] text-[16px] leading-[22px]">
              11 May, 2021
            </div>
            <div className="font-[syne,_sans-serif] text-[19px] leading-[26px] font-bold tracking-[1px] uppercase group-hover:text-[#ff2c2c] transition-all duration-300">
              An innovative service for easy & Fast shipments
            </div>
            <div className="font-[work_sans,_sans-serif] text-[16px] leading-[22px] mt-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
              orci id urna ultricies cursus quis eu augu
            </div>
          </div>
        </div>
      </section>
      <Informations />
      <Footer />
    </div>
  );
}
