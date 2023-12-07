"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleCourse from "./SingleCourse";
import SectionHeader from "../Common/SectionHeader";
import Link from "next/link";
import { HeroIcon } from "../Icon";
import { useQuery } from "react-query";
import { getCourse } from "@/networking/controller";

const Courses = () => {
  const { data } = useQuery("course", getCourse)
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      {data && data.length > 0 ? <>
        <section id="features" className="py-20 lg:py-25 xl:py-30">
          <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
            {/* <!-- Section Title Start --> */}
            <SectionHeader
              headerInfo={{
                title: "POPULAR COURSES",
                subtitle: "Featured On This Month"
              }}
            />
            {/* <!-- Section Title End --> */}

            <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
              {/* <!-- Features item Start --> */}

              {data && data.map((feature, key) => (
                <SingleCourse feature={feature} key={key} />
              ))}
              {/* <!-- Features item End --> */}
            </div>

            <div className="flex flex-col items-center my-8">
              <Link
                href="#"
                className="flex items-center justify-center rounded-md bg-primary p-4 px-6 text-lg text-white font-semibold font-sans my-3 max-w-1/3 hover:bg-black"
              >
                View All Courses
                <HeroIcon iconName="ArrowRightIcon" className="h-4 w-4 ml-1" solid />

              </Link>
            </div>
          </div>
        </section>
      </> : null}


      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Courses;
