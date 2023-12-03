"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import SectionHeader from "../Common/SectionHeader";
import { HeroIcon } from "../Icon";

const Contact = () => {
  /**
   * Source: https://www.joshwcomeau.com/react/the-perils-of-rehydration/
   * Reason: To fix rehydration error
   */
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <>
      {/* <!-- ===== Contact Start ===== --> */}
      <section id="support" className="px-4 md:px-8 2xl:px-0 bg-primary">
        <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20 py-20">
          <div className="mx-auto max-w-c-1315 px-2 md:px-8 xl:px-0 py-15">
            {/* <!-- Section Title Start --> */}
            <SectionHeader
              headerInfo={{
                title: "SUBSCRIBE NEWSLETTER",
                subtitle: "Get Every Latest News",
                classname: "text-white"
              }}
            />
          </div>

          <div className="flex rounded-md bg-white p-4 items-center gap-2 mx-[25%] max-w-[60%]">

            <HeroIcon iconName='EnvelopeIcon' className="h-5 w-5" />
            <input
              type='email'
              placeholder="Enter your mail address"
              className="w-full bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
            />
            <div>
              <HeroIcon iconName='PaperAirplaneIcon' className="h-5 w-5 text-primary" solid />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default Contact;
