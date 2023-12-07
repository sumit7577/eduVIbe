"use client";
import React from "react";
import SectionHeader from "../Common/SectionHeader";
import BlogItem from "./BlogItem";
import BlogData from "./blogData";
import { HeroIcon } from "../Icon";
import Link from "next/link";
import { useQuery } from "react-query";
import { getBlogs } from "@/networking/controller";

const Blog = () => {
  const { data } = useQuery("blog", getBlogs);
  return (
    <>
      {data && data.length > 0 ? <>
        <section className="py-20 lg:py-25 xl:py-30 bg-hero">
          <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-10">
            {/* <!-- Section Title Start --> */}
            <div className="animate_top mx-auto flex justify-between">
              <div className="flex flex-col gap-2">
                <h3 className="text-primary uppercase text-md font-bold font-sans">BLOG & NEWS</h3>
                <h2 className="text-black font-bold text-4xl dark:text-white font-sans">Trending on Our Blogs</h2>
              </div>
              <Link
                href="#"
                className="flex items-center justify-center rounded-md bg-primary p-4 px-6 text-lg text-white font-semibold font-sans my-3 max-w-1/3 hover:bg-black"
              >
                Read More Blogs
                <HeroIcon iconName="ArrowRightIcon" className="h-4 w-4 ml-1" solid />

              </Link>
            </div>
            {/* <!-- Section Title End --> */}
          </div>

          <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 xl:gap-2">
              {data && data.map((blog, key) => (
                <BlogItem blog={blog} key={key} />
              ))}
            </div>
          </div>
        </section>
      </> : null}

    </>
  );
};

export default Blog;
