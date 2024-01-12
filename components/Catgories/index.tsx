"use client";
import React from "react";
import SingleBrand from "./SingleBrand";
import { useQuery } from "react-query";
import { getCategory } from "@/networking/controller";
import Loader from "../Core/loader";

const Brands = () => {
  const { data, isLoading } = useQuery("categorie", getCategory);
  if (!data && isLoading) {
    return <Loader />
  }
  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}
      <section className="border border-x-0 border-y-stroke bg-alabaster py-11 dark:border-y-strokedark dark:bg-black bg-hero">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col items-center my-10 md:my-20">
            <h2 className="text-md font-bold font-sans uppercase tracking-wider text-primary">
              Course categories
            </h2>
            <p className="text-3xl md:text-4xl font-bold font-sans text-black mt-4">
              Popular Topics To Learn
            </p>
          </div>
          <div className="flex flex-wrap gap-8 items-center justify-center">
            {data && data.map((brand, key) => (
              <SingleBrand brand={brand} key={key} />
            ))}
          </div>
          <div className="flex flex-col items-center my-8">

          </div>

        </div>
      </section>
      {/* <!-- ===== Clients End ===== --> */}
    </>
  );
};

export default Brands;
