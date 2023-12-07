"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HeroIcon } from "../Icon";
import { useQuery } from "react-query";
import { getAbout } from "@/networking/controller";

const About = () => {
  const { data, isLoading } = useQuery("about", getAbout);
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      {data && data.length > 0 ? <>
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
                  src={data[0].image || "/images/about/about-light-01.png"}
                  alt="About"
                  className="dark:hidden"
                  fill
                />
                <Image
                  src={data[0].image || "/images/about/about-dark-01.png"}
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
                  {data[0].title}
                </span>
                <h2 className="relative mb-6 text-4xl font-bold text-black dark:text-white font-sans">
                  {data[0].title2}
                </h2>
                <p className="text-md font-sans text-gray-700">
                  {data[0].description}
                </p>
                {data[0].sections.map((item, index) => (
                  <div className="mt-7.5 flex items-center gap-5" key={index}>
                    <div className="flex h-13 w-13 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection bg-red-500">
                      <HeroIcon iconName="BookOpenIcon" solid className="h-7 w-7 text-white" />
                    </div>
                    <div className="w-3/4">
                      <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white font-semibold font-sans">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 font-sans">{item.description}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

      </> : null}

      {/* <!-- ===== About End ===== --> */}
    </>
  );
};

export default About;
