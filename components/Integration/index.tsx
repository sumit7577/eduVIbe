"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";
import { HeroIcon } from "../Icon";
import { useQuery } from "react-query";
import { getCore } from "@/networking/controller";
import Loader from "../Core/loader";

const Integration = () => {
  const { data, isLoading } = useQuery("core", getCore);
  
  if (!data && isLoading) {
    return <Loader />
  }
  return (
    <>
      {data && data.length > 0 ? <>
        <section>
          <div className="pattern-dots pattern-blue-500 pattern-bg-white pattern-size-4 pattern-opacity-10 relative z-50 mx-auto mt-15 max-w-c-1154 px-4 md:px-8 xl:mt-20 xl:px-0 grid md:grid-cols-2 sm:grid-cols-1 py-20">
            <div className="flex flex-col gap-2">
              <h2 className="text-primary uppercase text-md font-semibold font-sans tracking-widest">{data[0].title}</h2>
              <h1 className="text-black font-bold text-4xl font-sans">{data[0].title2}</h1>
              <div className="flex flex-wrap gap-8 my-8">
                {data[0].sections.map((item, index) => (
                  <div className="flex flex-col basis-[45%] gap-2" key={index}>
                    <HeroIcon iconName='UserGroupIcon' className="h-12 w-12 text-orange-500" />
                    <h2 className="text-lg font-bold font-sans text-black">{item.title}</h2>
                    <p className="text-md font-sans">{item.description}</p>
                  </div>
                ))}


                <div className="flex flex-col basis-[45%] gap-2">
                  <HeroIcon iconName='ComputerDesktopIcon' className="h-12 w-12 text-orange-500" />
                  <h2 className="text-lg font-bold font-sans text-black">Remote Education</h2>
                  <p className="text-md font-sans">Complete assignments from a remote location, such as their home or workplace.</p>
                </div>

                <div className="flex flex-col basis-[45%] gap-2">
                  <HeroIcon iconName={'DocumentMagnifyingGlassIcon'} className="h-12 w-12 text-orange-500" />
                  <h2 className="text-lg font-bold font-sans text-black">Digital Learning</h2>
                  <p className="text-md font-sans">Digital learning allows for more personalized and flexible learning experiences.</p>
                </div>

                <div className="flex flex-col basis-[45%] gap-2">
                  <HeroIcon iconName='BellSnoozeIcon' className="h-12 w-12 text-orange-500" />
                  <h2 className="text-lg font-bold font-sans text-black">Educator Support</h2>
                  <p className="text-md font-sans">The goal of educator support is to promote learning and growth among teachers.</p>
                </div>

              </div>
            </div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full"
            >
              <div className="rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                <Image
                  width={50}
                  height={50}
                  src={data[0].thumbnail || "./images/brand/brand-11.svg"}
                  alt={data[0].title || "Brand"}
                  className="h-full w-full"
                />
              </div>
            </motion.div>


          </div>
        </section>
      </> : null}

    </>
  );
};

export default Integration;
