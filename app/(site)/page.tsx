import { Metadata } from "next";
import Hero from "@/components/Hero";
import Categories from "@/components/Catgories";
import Courses from "@/components/Courses";
import About from "@/components/About";
import Teams from "@/components/Teams";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import Integration from "@/components/Integration";
import { Suspense } from "react";
import Loader from "@/components/Core/loader";

export const metadata: Metadata = {
  title: "Majoring Edutech",
  description: "This is Homepage for majoring edutech",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Suspense fallback={<Loader />}>
        <Hero />
        <About />
        <Categories />
        <Courses />
        <Testimonial />
        <Teams />
        <Integration />
        <Contact />
        <Blog />
      </Suspense>
    </main>
  );
}
