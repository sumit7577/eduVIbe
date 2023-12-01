"use client";
import React from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./catData";
import Link from "next/link";
import { HeroIcon } from "../Icon";

const Brands = () => {
  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}
      <section className="border border-x-0 border-y-stroke bg-alabaster py-11 dark:border-y-strokedark dark:bg-black bg-hero">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col items-center my-20">
            <h2 className="text-md font-bold font-sans uppercase tracking-wider text-primary">
              Course categories
            </h2>
            <p className="text-4xl font-bold font-sans text-black mt-4">
              Popular Topics To Learn
            </p>
          </div>
          <div className="flex flex-wrap justify-between items-center px-30">
            {brandData.map((brand, key) => (
              <SingleBrand brand={brand} key={key} />
            ))}
          </div>
          <div className="flex flex-col items-center my-8">
            <Link
              href="#"
              className="flex items-center justify-center rounded-md bg-primary p-4 px-6 text-lg text-white font-semibold font-sans my-3 max-w-1/3 hover:bg-black"
            >
              Creative Courses
              <HeroIcon iconName="ArrowRightIcon" className="h-4 w-4 ml-1" solid />

            </Link>
          </div>

        </div>
      </section>
      {/* <!-- ===== Clients End ===== --> */}
    </>
  );
};

export default Brands;
