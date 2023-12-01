"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HeroIcon } from "../Icon";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30 mt-20">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/about-light-01.png"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-dark-01.png"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <span className="font-semibold uppercase dark:text-white font-sans text-primary">
                About us
              </span>
              <h2 className="relative mb-6 text-4xl font-bold text-black dark:text-white font-sans">
                Creating A Community Of Life Long Learners
              </h2>
              <p className="text-md font-sans text-gray-700">
                Online learning has become increasingly popular in recent years, offering a flexible and convenient way for individuals to pursue education and training.
              </p>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-13 w-13 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection bg-red-500">
                  <HeroIcon iconName="BookOpenIcon" solid className="h-7 w-7 text-white" />
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white font-semibold font-sans">
                    Flexible Classes
                  </h3>
                  <p className="text-sm text-gray-600 font-sans">Flexible Classes refers to the process of acquiring knowledge or skills through the use of digital technologies and the internet.</p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-13 w-13 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection bg-red-500">
                  <HeroIcon iconName="BuildingLibraryIcon" solid className="h-7 w-7 text-white" />
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white font-semibold font-sans">
                    Learn from anywhere
                  </h3>
                  <p className="text-sm text-gray-600 font-sans">Whether you are a busy professional, a stay-at-home parent, or a student who prefers to study from home effectively.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}
    </>
  );
};

export default About;
