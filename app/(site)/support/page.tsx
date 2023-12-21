import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import Accordian from "@/components/Common/Accordian";

export const metadata: Metadata = {
  title: "Support Page - Solid SaaS Boilerplate",
  description: "This is Support page for Solid Pro",
  // other metadata
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 min-h-[70vh] md:px-10 px-5">
        <div className="md:col-span-4">
          <iframe src="https://iframe.mediadelivery.net/play/186666/eb6952db-4b9a-4c87-a927-64f6c5756dfd" loading="lazy" className="border" style={{ width: "100%",border:0,height:"100%" }} allowFullScreen={true} allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"></iframe>
        </div>
        <div className="md:col-span-2 flex flex-col gap-4">
          <h2 className="rounded-md bg-white p-4 shadow-lg text-black font-semibold font-sans text-md">Course Content</h2>
          <Accordian />
        </div>
      </div>

    </div>
  );
};

export default SupportPage;
