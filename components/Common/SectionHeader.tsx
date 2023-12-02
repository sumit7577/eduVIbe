"use client";
import { motion } from "framer-motion";

type HeaderInfo = {
  title: string;
  subtitle: string;
  description?: string;
  classname?:string
};

const SectionHeader = ({ headerInfo }: { headerInfo: HeaderInfo }) => {
  const { title, subtitle, description,classname } = headerInfo;

  return (
    <>
      {/* <!-- Section Title Start --> */}
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
        className="animate_top mx-auto text-center"
      >
        <div className="mb-2 inline-block px-4.5 py-1.5">
          <span className={`text-sectiontitle font-bold text-primary dark:text-white font-sans tracking-widest ${classname}`}>
            {title}
          </span>
        </div>
        <h2 className={`mx-auto mb-4 text-4xl font-bold text-black dark:text-white md:w-4/5 xl:w-1/2 font-sans xl:text-sectiontitle3 ${classname}`}>
          {subtitle}
        </h2>
        <p className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%]">{description}</p>
      </motion.div>
      {/* <!-- Section Title End --> */}
    </>
  );
};

export default SectionHeader;
