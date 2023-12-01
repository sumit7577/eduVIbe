"use client";
import Image from "next/image";
import { useState } from "react";
import { HeroIcon } from "../Icon";
import Link from "next/link";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46 bg-hero">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 ">
          <div className="md:grid md:grid-cols-2 sm:grid-rows-1 lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="ml-15">
              <h4 className="mb-4.5 text-base font-bold uppercase text-primary tracking-wide font-sans">
                Excellence in Education
              </h4>
              <h1 className="mb-5 text-7xl font-bold text-black dark:text-white font-sans">
                Start Better
              </h1>
              <h1 className="mb-5 text-7xl font-bold text-black dark:text-white font-sans">
                Learning Future
              </h1>
              <h1 className="mb-5 text-7xl font-bold text-black dark:text-white font-sans">
                From Here
              </h1>
              <p className="text-lg font-medium font-sans border-l-2 p-2 border-primary">
                Empower yourself with the knowledge and skills gained through online education! The key to your future!
              </p>

              <Link
                href="#"
                className="mt-10 flex items-center rounded-md bg-primary px-6 py-4 text- text-white duration-300 ease-in-out w-max font-semibold"
              >
                Get Started Today
                <HeroIcon iconName="ArrowRightIcon" className="h-4 w-4 mx-2" />
              </Link>
            </div>

            <div className="animate_right flex flex-col">
              <div className="flex gap-5">
                <div className="rounded-md bg-white p-4 basis-1/2 max-h-fit shadow-md">
                  <a className="cursor-pointer flex justify-center overflow-hidden" href="#">
                    <Image
                      src="/images/hero/hero-light.svg"
                      alt="shape"
                      width={250}
                      height={250}
                      className="hover:scale-110 ease-in duration-300"
                    />
                  </a>

                  <div className="flex justify-between items-center mb-2 mt-2">
                    <div className="flex items-center gap-1">
                      <HeroIcon iconName="NewspaperIcon" className="w-5 h-5 text-red-400" />
                      <p className="text-xs font-sans text-gray-80 font-semibold ">19 lessons</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <HeroIcon iconName="ClockIcon" className="w-5 h-5 text-red-400" />
                      <p className="text-xs font-sans text-gray-80 font-semibold ">15 hour</p>
                    </div>
                  </div>
                  <h2 className="text-md font-semibold text-black mb-3">
                    Learning How To Write As A Professional Author
                  </h2>
                  <p className="text-xs text-gray-80 font-medium font-sans">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam ut, iure esse unde voluptas optio a ducimus placeat quia hic.</p>
                </div>

                <div className="rounded-md bg-white p-4 relative flex flex-col h-96 top-15 shadow-md">
                  <div className="h-full">
                    <Image
                      src="/images/hero/hero-light.svg"
                      alt="shape"
                      height={600}
                      width={300}
                      className="h-full max-w-full object-cover"
                    />
                  </div>

                  <div className="flex justify-between items-center basis-1/6">
                    <div className="rounded-full bg-gray-100 h-10 w-10 text-primary flex items-center justify-center">
                      <HeroIcon iconName={'CameraIcon'} solid />
                    </div>
                    <div className="rounded-full bg-gray-100 h-10 w-10 text-primary flex items-center justify-center" >
                      <HeroIcon iconName={'MicrophoneIcon'} solid />
                    </div>
                    <div className="rounded-full bg-gray-100 h-10 w-10 text-primary flex items-center justify-center">
                      <HeroIcon iconName={'VideoCameraIcon'} solid />
                    </div>
                    <div className="rounded-full bg-red-700 h-10 w-10 text-white flex items-center justify-center">
                      <HeroIcon iconName={"PhoneIcon"} solid />
                    </div>

                  </div>

                </div>

              </div>

              <div className="rounded-md bg-white p-4 mt-4 basis-1/4 flex flex-col max-w-fit shadow-md px-6 relative left-30">
                <Image
                  src="/images/user/user-01.png"
                  alt="user"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col">
                  <h2 className="font-semibold text-md text-black font-sans mt-2">Design Workshop</h2>
                  <p className="font-medium text-xs text-gray font-sans mt-1">Today at 6:00 am</p>
                  <Link
                    href="#"
                    className="flex items-center justify-center rounded-md bg-red-500 hover:bg-primary p-2 text-xs text-white font-semibold font-sans my-3 max-w-1/3"
                  >
                    Join Now
                    <HeroIcon iconName="ArrowRightIcon" className="h-4 w-4 ml-1" />

                  </Link>
                </div>

              </div>


            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
