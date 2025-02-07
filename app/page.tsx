import Works from "@/components/Works";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="max-w-[1920px] h-screen w-full px-[20px] py-[40px] overflow-x-hidden">
        <div className="grid grid-cols-[2fr_1fr] gap-6 h-full">
          <div className="grid grid-rows-2 gap-3">
            <div className="grid grid-cols-[2fr_1fr] gap-6">
              <div className="bg-[#464C5A] rounded-3xl flex flex-col justify-end px-4 pb-4 round">
                <h1 className="font-poppins font-bold text-[48px]">
                  Pioneering the Fusion of{" "}
                  <span className="font-light">
                    Aesthetics and Functionality
                  </span>{" "}
                  in Digital Design
                </h1>
              </div>
              <div className="bg-[#6A7181] rounded-3xl relative w-full h-auto overflow-hidden">
                <Image
                  src="/assets/me/_DSC8035.jpg"
                  alt="Lander Guevarra"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#6A7181] rounded-3xl flex flex-col justify-end px-4 pb-16">
                <p className="text-[24px] font-poppins font-normal">
                  Lander Guevarra is a Front-end Web Developer focused on
                  creating sleek, dynamic, and user-friendly digital
                  experiences. With attention to design and performance, he
                  develops seamless and interactive web solutions.
                </p>
              </div>
              <div className="bg-[#2A2F35] text-[#D8D0BC] rounded-3xl grid grid-rows-2 px-4 pt-4">
                <h4 className="text-[24px] font-poppins font-normal">
                  Have a <br />
                  Question??
                </h4>
                <div className="grid grid-cols-[2fr_1fr] pb-12">
                  <div className="flex justify-start items-end font-poppins font-bold text-[48px]">
                    Contact Me
                  </div>
                  <div className="flex flex-col justify-end items-end mb-2 text-[24px] font-poppins font-normal space-y-2">
                    <a
                      href="https://www.facebook.com/lander.guevarra.9"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h6 className="hover:underline">FACEBOOK</h6>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/lander-guevarra21/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h6 className="hover:underline">LINKEDIN</h6>
                    </a>
                    <a href="mailto:guevarralander0@gmail.com">
                      <h6 className="hover:underline">EMAIL</h6>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#6A7181] rounded-3xl text-[#2A2F35] text-[40px] font-poppins font-bold p-4 grid grid-rows-[1fr_2fr]">
            <div className="flex flex-col justify-between">
              <h2>WORKS</h2>
              <div className="bg-[#6A7181] rounded-3xl relative w-full h-64 overflow-hidden">
                <Image
                  src="/assets/me/_DSC8035.jpg"
                  alt="Lander Guevarra"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center py-10">
              <Works />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
