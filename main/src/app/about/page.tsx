"use client";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import Informations from "./../../components/Informations";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <section className="about_container px-5 overflow-hidden">
        <div className="bg_banner relative w-screen h-screen -z-100 -top-32 -left-5">
          <div>
            <Image
              src="/img/about-bg.jpg"
              alt="banner"
              fill
              className="object-cover"
            />
          </div>
          <div className="desck absolute inset-0 flex items-center justify-center">
            <div className="title md:text-8xl text-2xl tracking-[10px] font-bold mb-4 uppercase">
              About Us
            </div>
          </div>
        </div>
        <div className="container max-w-[1440px] mx-auto px-5">
          <div className="logist-block flex lg:flex-row flex-col ">
            <div className="item_left lg:max-w-[50%] w-full">
              <div className="subtitle font-[work_sans,_sans-serif] text-[16px] leading-[22px]">
                Doloremque laudantium, totam rem aperiam, eaque ipsa
              </div>
              <ul>
                <li className="flex items-center text-[#ffffff] font-[Syne] text-[15px] tracking-[1.7px] font-bold p-2">
                  <span className="w-[10px] h-[10px] top-[8px] rounded-[25px] bg-[#FF2C2C] mr-2"></span>
                  PACKAGING
                </li>
                <li className="flex items-center text-[#ffffff] font-[Syne] text-[15px] tracking-[1.7px] font-bold p-2">
                  <span className="w-[10px] h-[10px] top-[8px] rounded-[25px] bg-[#FF2C2C] mr-2"></span>
                  HANDLING
                </li>
                <li className="flex items-center text-[#ffffff] font-[Syne] text-[15px] tracking-[1.7px] font-bold p-2">
                  <span className="w-[10px] h-[10px] top-[8px] rounded-[25px] bg-[#FF2C2C] mr-2"></span>
                  TRANSPORTATION
                </li>
                <li className="flex items-center text-[#ffffff] font-[Syne] text-[15px] tracking-[1.7px] font-bold p-2">
                  <span className="w-[10px] h-[10px] top-[8px] rounded-[25px] bg-[#FF2C2C] mr-2"></span>
                  MARINE INSURANCE
                </li>
                <li className="flex items-center text-[#ffffff] font-[Syne] text-[15px] tracking-[1.7px] font-bold p-2">
                  <span className="w-[10px] h-[10px] top-[8px] rounded-[25px] bg-[#FF2C2C] mr-2"></span>
                  CUSTOM BROKERAGE
                </li>
              </ul>
            </div>
            <div className="item_right lg:max-w-[50%] w-full">
              <div className="info-desc">
                <p className="font-[work_sans,_sans-serif] text-[16px] leading-[22px]">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur?
                </p>
                <p className="font-[work_sans,_sans-serif] text-[16px] leading-[22px] pt-6">
                  Quis autem vel eum iure reprehenderit qui adipisci velit, sed
                  quia non numquam eius modi tempora incidunt ut labore et
                  dolore magnam aliquam quaerat voluptatem.
                </p>
              </div>
            </div>
          </div>
          <div className="news_left pt-[100px]">
            <div className="news_title font-[syne,_sans-serif] text-[42px] leading-[51px] font-extrabold tracking-[3px] uppercase">
              You can trust us
            </div>
            <div className="flex items-center justify-center">
              <div className="news_subtitle font-[work_sans,_sans-serif] text-[23px] leading-[27px]">
                Find out what is our expertise
              </div>
              <div className="news_line w-[50px] mx-auto h-[3px] bg-[#ff2c2c] ml-5 xl:block hidden"></div>
            </div>
          </div>
          <div className="block_top flex lg:flex-row flex-col pt-20">
            <div className="item_left lg:max-w-[50%] w-full">
              <div className="bg_item flex">
                <div className="bg-num text-[#ff2c2c]">01</div>
                <div className="bg-title pl-2 font-[syne,_sans-serif] text-[19px] leading-[26px] not-italic tracking-[1px]">
                  <span className="font-bold">Reliable</span>
                  <div className="bg-subtitle font-[work_sans,_sans-serif] text-[16px] leading-[22px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    eli
                  </div>
                </div>
              </div>
              <div className="bg_item flex py-4">
                <div className="bg-num text-[#ff2c2c]">02</div>
                <div className="bg-title pl-2 font-[syne,_sans-serif] text-[19px] leading-[26px] not-italic tracking-[1px]">
                  <span className="font-bold">Reliable</span>
                  <div className="bg-subtitle font-[work_sans,_sans-serif] text-[16px] leading-[22px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    eli
                  </div>
                </div>
              </div>
              <div className="bg_item flex">
                <div className="bg-num text-[#ff2c2c]">03</div>
                <div className="bg-title pl-2 font-[syne,_sans-serif] text-[19px] leading-[26px] not-italic tracking-[1px]">
                  <span className="font-bold">Reliable</span>
                  <div className="bg-subtitle font-[work_sans,_sans-serif] text-[16px] leading-[22px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    eli
                  </div>
                </div>
              </div>
            </div>
            <div className="item_right lg:pt-0 pt-10">
              <div className="bg-img ">
                <Image
                  src="/img/news-4.jpg"
                  alt="banner"
                  width={650}
                  height={500}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="block_bottom flex lg:flex-row flex-col pt-28 pb-20">
            <div className="item_right">
              <div className="bg-img ">
                <Image
                  src="/img/news-2.jpg"
                  alt="banner"
                  width={650}
                  height={500}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="item_left lg:max-w-[50%] w-full lg:pl-10 pl-0 lg:pt-0 pt-10">
              <div className="bg_item flex">
                <div className="bg-num text-[#ff2c2c]">01</div>
                <div className="bg-title pl-2 font-[syne,_sans-serif] text-[19px] leading-[26px] not-italic tracking-[1px]">
                  <span className="font-bold">Reliable</span>
                  <div className="bg-subtitle font-[work_sans,_sans-serif] text-[16px] leading-[22px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    eli
                  </div>
                </div>
              </div>
              <div className="bg_item flex py-4">
                <div className="bg-num text-[#ff2c2c]">02</div>
                <div className="bg-title pl-2 font-[syne,_sans-serif] text-[19px] leading-[26px] not-italic tracking-[1px]">
                  <span className="font-bold">Reliable</span>
                  <div className="bg-subtitle font-[work_sans,_sans-serif] text-[16px] leading-[22px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    eli
                  </div>
                </div>
              </div>
              <div className="bg_item flex">
                <div className="bg-num text-[#ff2c2c]">03</div>
                <div className="bg-title pl-2 font-[syne,_sans-serif] text-[19px] leading-[26px] not-italic tracking-[1px]">
                  <span className="font-bold">Reliable</span>
                  <div className="bg-subtitle font-[work_sans,_sans-serif] text-[16px] leading-[22px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    eli
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Informations />
      <Footer />
    </div>
  );
}
