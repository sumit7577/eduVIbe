"use client";
import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HeroIcon } from "../Icon";
import { BlogRespType } from "@/networking/types";

const BlogItem = ({ blog }: { blog: BlogRespType }) => {
  const { id, title, image, description, date, user } = blog;

  return (
    <>
      <motion.a
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
        href="#"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top rounded-lg bg-white p-6 pb-9 shadow-solid-8 dark:bg-blacksection max-w-[90%]"
      >
        <div className="px-4">
          <h3 className="mb-2 mt-2 line-clamp-2 inline-block text-md text-primary dark:text-white font-bold font-sans">
            <Link href={`/blog/blog-details`}>
              {title}
            </Link>
          </h3>
          <p className="line-clamp-3 text-3xl text-black dark:text-white font-bold font-sans">{description}</p>
          <div className="flex justify-between py-6">
            <div className="flex items-center gap-2">
              <HeroIcon iconName='CalendarIcon' className="h-5 w-5" />
              <p className="text-sm">
                {new Date(date).toLocaleDateString("en-Us", { day: "2-digit", month: "short", year: "numeric" })}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <HeroIcon iconName='UserIcon' className="h-5 w-5" />
              <p className="text-sm">
                Posted By <span className="text-primary">{user.username}</span>
              </p>
            </div>
          </div>
        </div>
        <Link href={`/blog/`} className="relative block aspect-[368/239] overflow-hidden">
          <Image src={image || "/images/hero/hero-light.svg"} alt={title} fill className="hover:scale-110 ease-in duration-300" />
        </Link>
      </motion.a>
    </>
  );
};

export default BlogItem;
