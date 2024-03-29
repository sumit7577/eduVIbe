"use client";
import SectionHeader from "../Common/SectionHeader";

import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";
import SingleTestimonial from "./SingleTestimonial";
import { testimonialData } from "./testimonialData";
import { useQuery } from "react-query";
import { getTestimonial } from "@/networking/controller";
import Loader from "../Core/loader";

const Testimonial = () => {
  const { data, isLoading } = useQuery("testimonial", getTestimonial)
  if (!data && isLoading) {
    return <Loader />
  }
  return (
    <>
      {data && data.length > 0 ? <>
        <section className="bg-hero">
          <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0 pt-24">
            {/* <!-- Section Title Start --> */}
            <div className="animate_top mx-auto text-center">
              <SectionHeader
                headerInfo={{
                  title: `TESTIMONIALS`,
                  subtitle: `What Our Student Says`
                }}
              />
            </div>
            {/* <!-- Section Title End --> */}
          </div>

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
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top mx-auto mt-15 max-w-c-1235 px-4 md:px-8 xl:mt-20 xl:px-0"
          >
            {/* <!-- Slider main container --> */}
            <div className="swiper testimonial-01 mb-20 pb-22.5">
              {/* <!-- Additional required wrapper --> */}
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                breakpoints={{
                  // when window width is >= 640px
                  0: {
                    slidesPerView: 1,
                  },
                  // when window width is >= 768px
                  768: {
                    slidesPerView: 1,
                  },
                }}
              >
                {data && data[0].sections.map((review) => (
                  <SwiperSlide key={review?.id}>
                    <SingleTestimonial review={review} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>
        </section>
      </> : null
      }
    </>
  );
};

export default Testimonial;
