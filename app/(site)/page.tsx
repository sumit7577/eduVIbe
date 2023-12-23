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
import { useAuth } from "../context/AuthContext";

export const metadata: Metadata = {
  title: "Majoring Edutech",
  description: "This is Homepage for majoring edutech",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Categories />
      <Courses />
      <Testimonial />
      <Teams/>
      <Integration />
      <Contact />
      <Blog />
    </main>
  );
}
