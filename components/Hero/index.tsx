"use client";
import Image from "next/image";
import { HeroIcon } from "../Icon";
import Link from "next/link";
import { useQuery } from "react-query";
import { getHero } from "@/networking/controller";

const Hero = () => {
  const { data, isLoading, isError } = useQuery("hero", getHero)
  return (
    <>
      {data && data.length > 0 ? <>
        <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46 bg-hero">
          <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 ">
            <div className="md:grid md:grid-cols-2 sm:grid-rows-1 lg:items-center lg:gap-8 xl:gap-32.5">
              <div className="md:ml-15">
                <h4 className="mb-4.5 text-base font-bold uppercase text-primary tracking-wide font-sans">
                  {data[0].title}
                </h4>
                <h1 className="mb-5 md:text-7xl text-4xl font-bold text-black dark:text-white font-sans">
                  {data[0].title2}
                </h1>
                <p className="md:text-lg text-md font-medium font-sans border-l-2 p-2 border-primary">
                  {data[0].description}
                </p>

                <Link
                  href="/course"
                  className="mt-4 flex items-center rounded-md bg-primary px-6 py-4 text- text-white duration-300 ease-in-out w-max font-semibold"
                >
                  Get Started Today
                  <HeroIcon iconName="ArrowRightIcon" className="h-4 w-4 mx-2" />
                </Link>
              </div>

              <div className="animate_right flex flex-col mt-5 md:mt-0">
                <div className="md:flex gap-5">
                  <div className="rounded-md bg-white p-4 basis-1/2 max-h-fit shadow-md">
                    <a className="cursor-pointer flex justify-center overflow-hidden h-1/2" href="#">
                      <Image
                        src={data && data[0].featured_course.image || "/images/hero/hero-light.svg"}
                        alt={data && data[0].featured_course.title}
                        width={250}
                        height={250}
                        className="hover:scale-110 ease-in duration-300 h-full w-full"
                      />
                    </a>

                    <div className="flex justify-between items-center mb-2 mt-2">
                      <div className="flex items-center gap-1">
                        <HeroIcon iconName="NewspaperIcon" className="w-5 h-5 text-red-400" />
                        <p className="text-xs font-sans text-gray-80 font-semibold ">{data[0].featured_course.lessons.length} Lessons</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <HeroIcon iconName="ClockIcon" className="w-5 h-5 text-red-400" />
                        <p className="text-xs font-sans text-gray-80 font-semibold ">{data[0].featured_course.lessons[0].duration} Hour</p>
                      </div>
                    </div>
                    <div className="text-md font-semibold text-black mb-3" dangerouslySetInnerHTML={{ __html: data[0].featured_course.overview[0]?.title ?? data[0].featured_course.title }} />
                    <div className="text-xs text-gray-80 font-medium font-sans" dangerouslySetInnerHTML={{ __html: data[0].featured_course.overview[0]?.description ?? data[0].description }} />
                  </div>

                  <div className="rounded-md bg-white p-4 relative flex flex-col h-96 top-15 shadow-md">
                    <div className="h-full">
                      <Image
                        src={data && data[0].other_image || "/images/hero/hero-light.svg"}
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
                {data[0].meet_link &&
                  <div className="order-first md:order-1 rounded-md bg-white p-4 mt-4 basis-1/4 flex flex-col max-w-fit shadow-md px-6 relative md:left-30 mb-4 md:mb-0">
                    <Image
                      src="/images/user/user-01.png"
                      alt="user"
                      width={40}
                      height={40}
                    />
                    <div className="flex flex-col">
                      <h2 className="font-semibold text-md text-black font-sans mt-2">{data[0].meet_name}</h2>
                      <p className="font-medium text-xs text-gray font-sans mt-1">Today at {new Date(data[0].meet_time).toLocaleDateString()}</p>
                      <Link
                        href={data[0].meet_link}
                        className="flex items-center justify-center rounded-md bg-red-500 hover:bg-primary p-2 text-xs text-white font-semibold font-sans my-3"
                      >
                        Join Now
                        <HeroIcon iconName="ArrowRightIcon" className="h-4 w-4 ml-1" />

                      </Link>
                    </div>

                  </div>
                }
              </div>
            </div>
          </div>
        </section>
      </> : null}

    </>
  );
};

export default Hero;
