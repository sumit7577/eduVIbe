import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";
import { HeroIcon } from "../Icon";
import { CourseRespType } from "@/networking/types";

const SingleCourse = ({ feature }: { feature: CourseRespType }) => {
  const { id, title, image, students, instructor, lessons, price, discount_price, duration } = feature;

  return (
    <>
      <motion.a
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        href={`course/${id}/`}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="group animate_top z-40 rounded-lg border cursor-pointer border-white bg-white p-6 max-w-[24rem] shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark"
      >
        <div className="relative flex h-[16rem] items-center justify-center rounded-[4px] group-hover:scale-120 ease-in duration-300">
          <Image src={image ? image : "/images/blog/blog-02.png"} width={400} height={400} alt="course" className="h-full w-full object-cover" />
          <div className="flex absolute top-2 justify-between w-full">
            <div className="flex gap-1 items-center bg-orange-600 p-1 px-2 rounded-sm">
              <HeroIcon iconName="ClockIcon" className="h-4 w-4 text-white" />
              <p className="text-sm text-white font-semibold font-sans">{duration} week</p>
            </div>

            <div className="rounded-full p-[0.4rem] bg-gray-400 mx-3">
              <HeroIcon iconName="HeartIcon" solid className="h-5 w-5 text-white" />
            </div>

          </div>
        </div>
        <div className="flex flex-col">

          <div className="flex justify-between my-2 mt-4">
            <div className="flex gap-2 items-center">
              <Image src="/images/user/user-01.png" alt={"educator"} height={30} width={30} />
              <h2 className="text-md font-semibold text-black font-sans">{instructor && instructor.username}</h2>
            </div>
            <div className="flex gap-2 items-center">
              <HeroIcon iconName={'StarIcon'} className="h-5 w-5 text-yellow-500" solid />
              <p>(5.0)</p>
            </div>
          </div>

          <h2 className="font-bold text-xl font-sans text-black my-3">{title}</h2>
          <div className="flex gap-5 my-2 border-b-2 pb-4">
            <div className="flex gap-1 items-center">
              <HeroIcon iconName='UsersIcon' className="h-5 w-5" />
              <p className="text-sm text-gray-600 font-medium">{students && students.length} Students</p>
            </div>

            <div className="flex gap-1 items-center">
              <HeroIcon iconName='NewspaperIcon' className="h-5 w-5" />
              <p className="text-sm text-gray-600 font-medium">{lessons && lessons.length} Lessons</p>
            </div>
          </div>

          <div className="font-bold text-md bg-primary text-white rounded-md max-w-[5rem] p-2 flex justify-center my-2">
            {parseInt(price.toString()).toLocaleString("en-US", { style: "currency", currency: "INR" })}
          </div>

        </div>
      </motion.a>
    </>
  );
};

export default SingleCourse;
