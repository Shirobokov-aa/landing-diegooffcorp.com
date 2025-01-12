"use client";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import Informations from "./../../components/Informations";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <section className="px-5 overflow-hidden">
        <div className="relative w-screen h-screen -z-100 -top-32 -left-5">
          <div>
            <Image
              src="/img/about-bg.jpg"
              alt="banner"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="md:text-8xl text-2xl tracking-[10px] font-bold mb-4 uppercase">
              About Us
            </div>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto px-5">
          <div className="flex lg:flex-row flex-col ">
            <div className="lg:max-w-[50%] w-full">
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
            <div className="lg:max-w-[50%] w-full">
              <div>
                <p className="font-[syne,_sans-serif] text-[16px] leading-[22px] lg:pt-0 pt-10">
Founded in Indonesia, Diego Off Corp is a dynamic company dedicated to facilitating seamless trade and logistics. Our mission is to support businesses by providing access to high-quality products and efficient logistics solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="pt-[100px]">
            <div className="font-[syne,_sans-serif] text-[42px] leading-[51px] font-extrabold tracking-[3px] uppercase">
              You can trust us
            </div>
            <div className="flex items-center justify-center">
              <div className="font-[work_sans,_sans-serif] text-[23px] leading-[27px]">
                Find out what is our expertise
              </div>
              <div className="w-[50px] mx-auto h-[3px] bg-[#ff2c2c] ml-5 xl:block hidden"></div>
            </div>
          </div>
          <div className="flex lg:flex-row lg:justify-between flex-col pt-20">
            <div className="lg:max-w-[48%] px-4 w-full">
              <div className="flex">
                <div className="text-[#ff2c2c]">01</div>
                <div className="pl-2 font-[syne,_sans-serif] text-[19px] leading-[26px] not-italic tracking-[1px]">
                  <span className="font-bold">Integrity:</span>
                  <div className="font-[work_sans,_sans-serif] text-[16px] leading-[22px]">
                  Building trust through transparent and ethical practices.
                  </div>
                </div>
              </div>
              <div className="flex py-4">
                <div className="text-[#ff2c2c]">02</div>
                <div className="pl-2 font-[syne,_sans-serif] text-[19px] leading-[26px] not-italic tracking-[1px]">
                  <span className="font-bold">Innovation:</span>
                  <div className="font-[work_sans,_sans-serif] text-[16px] leading-[22px]">
                  Utilizing the latest technology to enhance operations.
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="text-[#ff2c2c]">03</div>
                <div className="pl-2 font-[syne,_sans-serif] text-[19px] leading-[26px] not-italic tracking-[1px]">
                  <span className="font-bold">Customer Satisfaction:</span>
                  <div className="font-[work_sans,_sans-serif] text-[16px] leading-[22px]">
                  Prioritizing the success of our clients.
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:pt-0 pt-10">
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
          <div className="flex lg:flex-row lg:justify-between flex-col-reverse pt-10 pb-20">
            <div>
              <div>
                <Image
                  src="/img/news-2.jpg"
                  alt="banner"
                  width={650}
                  height={500}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:max-w-[48%] px-4 w-full">
              <div className="flex">
                <div className="text-[#ff2c2c]">04</div>
                <div className="pl-2 font-[syne,_sans-serif] text-[19px] leading-[26px] not-italic tracking-[1px]">
                  <span className="font-bold">Customized solutions</span>
                  <div className="font-[work_sans,_sans-serif] text-[16px] leading-[22px]">
                    We offer customized logistics solutions to meet your
                    specific needs, including temperature-controlled
                    transportation and more.
                  </div>
                </div>
              </div>
              <div className="flex py-4">
                <div className="text-[#ff2c2c]">05</div>
                <div className="pl-2 font-[syne,_sans-serif] text-[19px] leading-[26px] not-italic tracking-[1px]">
                  <span className="font-bold">Cost-Effective Services</span>
                  <div className="font-[work_sans,_sans-serif] text-[16px] leading-[22px]">
                    By optimizing our logistics processes, we provide
                    competitive pricing without compromising on quality, helping
                    you save money while enhancing service levels.
                  </div>
                </div>
              </div>
              <div className="flex pb-10">
                <div className="text-[#ff2c2c]">06</div>
                <div className="pl-2 font-[syne,_sans-serif] text-[19px] leading-[26px] not-italic tracking-[1px]">
                  <span className="font-bold">Expert Support</span>
                  <div className="font-[work_sans,_sans-serif] text-[16px] leading-[22px]">
                    Our team of logistics professionals is available 24/7 to
                    assist you with any inquiries, ensuring smooth communication
                    and support throughout the shipping process.
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
