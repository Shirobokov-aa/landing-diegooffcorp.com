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
      <section className="about_container px-5 overflow-hidden">
        <div className="bg_banner relative w-screen h-screen -z-100 -top-32 -left-5">
          <div>
            <Image
              src="/img/bg-office.jpg"
              alt="banner"
              fill
              className="object-cover"
            />
          </div>
          <div className="desck absolute inset-0 flex items-center justify-center">
            <div className="title md:text-8xl text-2xl tracking-[10px] font-bold mb-4 uppercase">
              Contact Us
            </div>
          </div>
        </div>
        <div className="block_top flex lg:flex-row lg:items-center lg:justify-center flex-col -mt-[100px] pb-20">
          <div className="item_left lg:max-w-[50%] w-full">
            <div className="bg_item lg:max-w-80 w-full">
              <div className="contact-desc">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut
                </p>
              </div>
              <div className="contact-adres flex pt-5 font-[work_sans,_sans-serif] text-[20px] leading-[22px]">
                <span>
                  <Image
                    src="/img/location.svg"
                    alt="phone"
                    width={24}
                    height={24}
                  />
                </span>
                <span className="pl-2 w-full">
                  54/6 Soi street 29 (birminghem), Somei district, birminghem
                  10220 united kingdom
                </span>
              </div>
              <div className="contact-mail pt-5 font-[work_sans,_sans-serif] text-[20px] leading-[22px] hover:text-[#ff2c2c]">
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
              <div className="contact-phone pt-5 font-[work_sans,_sans-serif] text-[20px] leading-[22px] hover:text-[#ff2c2c]">
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
          <div className="item_right lg:pt-0 pt-10">
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
