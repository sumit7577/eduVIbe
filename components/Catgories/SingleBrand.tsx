import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Brand } from "@/types/brand";
import { motion } from "framer-motion";
import { CategoryRespType } from "@/networking/types";

const SingleBrand = ({ brand }: { brand: CategoryRespType }) => {
  const { image, header, title, description, id } = brand;

  return (
    <>
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
        transition={{ duration: 1, delay: id }}
        viewport={{ once: true }}
        whileHover={{ translateY: -50, borderBottomWidth: 2, borderColor: "#525FE1" }}
        className="mx-w-full max-w-[15rem] rounded-md bg-white my-4 p-4 flex flex-col items-center"
      >
        <div className="flex items-center flex-col h-45">
          <Image
            className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden h-full max-w-full"
            src={image}
            alt={title}
            height={400}
            width={400}
          />
          <Image
            className="hidden opacity-50 transition-all duration-300 hover:opacity-100 dark:block"
            src={image}
            alt={title}
            fill
          />
        </div>
        <div className="flex items-center flex-col gap-2">
          <p className="text-md text-primary font-sans">
            5 Courses
          </p>
          <h2 className="text-lg text-black font-semibold font-sans">
            {title}
          </h2>
          <p className="text-md text-gray-800 font-sans text-center">
            {description}
          </p>
        </div>

      </motion.div>
    </>
  );
};

export default SingleBrand;
