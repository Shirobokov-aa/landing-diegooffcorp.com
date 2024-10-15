"use client";
import Informations from "./Informations";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Main() {
  return (
    <main className="overflow-hidden">
      <section>
        <div className="relative w-screen h-screen -z-100 -top-1">
          <div>
            <Image
              src="/img/slider-img.jpg"
              alt="banner"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative max-w-[700px] top-[35%] lg:pl-[200px] pl-[50px]">
            <div className="md:text-8xl text-2xl tracking-[10px] font-bold mb-4 uppercase">
              World Cargo Services
            </div>
            <div>Fastest, Reliable System for your international packages</div>
            <Button
              variant="outline"
              className="bg-[#ff2c2c] text-[16px] font-bold text-white px-[45px] py-[30px] hover:bg-white hover:text-black uppercase mt-5 rounded-none border-0"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="max-w-[1440px] mx-auto px-5 flex md:flex-row text-center flex-col justify-between items-center pt-[100px] pb-[100px]">
        <div className="max-w-[33%] flex flex-col items-center">
          <div className="text-5xl tracking-[3px] font-bold">1500000</div>
          <div>Customs cleared and satisfied clients</div>
        </div>
        <div className="max-w-[33%] flex flex-col items-center md:py-0 py-7">
          <div className="text-5xl tracking-[3px] font-bold">200</div>
          <div>Packages sent</div>
        </div>
        <div className="max-w-[33%] flex flex-col items-center">
          <div className="text-5xl tracking-[3px] font-bold">1300</div>
          <div>Customs fastly cleared</div>
        </div>
      </section>
      <section>
        <div className="flex w-full h-[800px]">
          <div className="relative lg:w-[70%] w-full h-full">
            <Image src="/img/bg-tizer-1.jpg" alt="banner" fill className="" />
            <div className="inset-0 flex">
              <div className="w-[80%] mx-auto h-[2px] bg-[#ff2c2c] lg:mt-52 mt-10">
                <div className="lg:grid-cols-3 grid-cols-1 gap-6 mt-10">
                  <div className="flex">
                    <div className="text-[#ff2c2c]">01</div>
                    <div className="pl-2 font-[syne,_sans-serif] lg:text-[19px] text-[16px] leading-[26px] not-italic tracking-[1px]">
                      <span className="font-bold">Reliable</span>
                      <div className="font-[work_sans,_sans-serif] text-[16px] leading-[22px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut eli
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="text-[#ff2c2c]">02</div>
                    <div className="pl-2 font-[syne,_sans-serif] text-[19px] leading-[26px] not-italic tracking-[1px]">
                      <span className="font-bold">Reliable</span>
                      <div className="font-[work_sans,_sans-serif] text-[16px] leading-[22px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut eli
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="text-[#ff2c2c]">03</div>
                    <div className="pl-2 font-[syne,_sans-serif] text-[19px] leading-[26px] not-italic tracking-[1px]">
                      <span className="font-bold">Reliable</span>
                      <div className="font-[work_sans,_sans-serif] text-[16px] leading-[22px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut eli
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="text-[#ff2c2c]">04</div>
                    <div className="pl-2 font-[syne,_sans-serif] text-[19px] leading-[26px] not-italic tracking-[1px]">
                      <span className="font-bold">Reliable</span>
                      <div className="font-[work_sans,_sans-serif] text-[16px] leading-[22px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut eli
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="text-[#ff2c2c]">05</div>
                    <div className="pl-2 font-[syne,_sans-serif] text-[19px] leading-[26px] not-italic tracking-[1px]">
                      <span className="font-bold">Reliable</span>
                      <div className="font-[work_sans,_sans-serif] text-[16px] leading-[22px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut eli
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="text-[#ff2c2c]">06</div>
                    <div className="pl-2 font-[syne,_sans-serif] text-[19px] leading-[26px] not-italic tracking-[1px]">
                      <span className="font-bold">Reliable</span>
                      <div className="font-[work_sans,_sans-serif] text-[16px] leading-[22px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut eli
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative lg:w-[30%] h-full lg:block hidden">
            <Image src="/img/bg-tizer-2.jpg" alt="banner" fill className="" />
          </div>
        </div>
      </section>
      <section className="pt-[50px] ">
        <div className="max-w-[1440px] mx-auto lg:px-5 px-[0px] relative">
          <div className="lg:h-[1000px] h-[500px] relative">
            <Image
              src="/img/bg-office.jpg"
              alt="office"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h3 className="text-white lg:text-7xl text-3xl font-bold uppercase">
                Network & Offices
              </h3>
              <Button
                variant="outline"
                className="bg-[#ff2c2c] text-[16px] font-bold text-white px-[45px] py-[30px] hover:bg-white hover:text-black uppercase mt-5 rounded-none border-0"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1440px] mx-auto px-4 pt-[50px] pb-[100px]">
        <div className=" flex lg:flex-row flex-col lg:justify-between items-center w-full">
          <div>
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
          <div className="flex lg:flex-row flex-col">
            <Link href="/news" className="news-item max-w-[335px] mr-10 group">
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
                An innovative service for easy & Fast shipments
              </div>
              <div className="font-[work_sans,_sans-serif] text-[16px] leading-[22px] mt-[20px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
                orci id urna ultricies cursus quis eu augu
              </div>
            </Link>
            <Link href="/news" className="max-w-[335px] mr-10 group">
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
                An innovative service for easy & Fast shipments
              </div>
              <div className="font-[work_sans,_sans-serif] text-[16px] leading-[22px] mt-[20px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
                orci id urna ultricies cursus quis eu augu
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div className="h-[700px] relative">
            <Image
              src="/img/follow-bg.jpg"
              alt="follow"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h3 className="font-[syne,_sans-serif] xl:text-[69px] text-5xl font-extrabold uppercase lg:text-left text-center">
                Follow your cargo&#96;s status
              </h3>
            </div>
          </div>
          <Informations />
        </div>
      </section>
    </main>
  );
}

export default Main;
