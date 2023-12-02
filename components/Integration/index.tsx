"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";
import { HeroIcon } from "../Icon";

const Integration = () => {
  return (
    <>
      <section>
        <div className="pattern-dots pattern-blue-500 pattern-bg-white pattern-size-4 pattern-opacity-10 relative z-50 mx-auto mt-15 max-w-c-1154 px-4 md:px-8 xl:mt-20 xl:px-0 grid md:grid-cols-2 sm:grid-cols-1 py-20">
          <div className="flex flex-col gap-2">
            <h2 className="text-primary uppercase text-md font-semibold font-sans tracking-widest">why choose us</h2>
            <h1 className="text-black font-bold text-4xl font-sans">Our Core Features</h1>
            <div className="flex flex-wrap gap-8 my-8">
              <div className="flex flex-col basis-[45%] gap-2">
                <HeroIcon iconName='UserGroupIcon' className="h-12 w-12 text-orange-500" />
                <h2 className="text-lg font-bold font-sans text-black">Virtual Classroom</h2>
                <p className="text-md font-sans">Students can access course materials, participate in debate & discussions.</p>
              </div>

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
                src="./images/brand/brand-11.svg"
                alt="Brand"
                className="h-full w-full"
              />
            </div>
          </motion.div>


        </div>
      </section>
    </>
  );
};

export default Integration;
