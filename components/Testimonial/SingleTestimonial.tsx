import { TestimonialRespType, sectionResponse } from "@/networking/types";
import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const SingleTestimonial = ({ review }: { review: typeof sectionResponse }) => {
  const { image, title, title2, description } = review;
  return (
    <div className="p-9 pt-7.5 dark:shadow-none">
      <div className="mb-7.5 grid grid-cols-1 md:grid-cols-2 border-b border-stroke pb-6 dark:border-strokedark h-96 gap-8">
        <div className="flex w-full">
          <Image width={80} height={80} className="h-full w-full" src="/images/hero/hero-light.svg" alt={title} />
        </div>

        <div className="flex flex-col gap-8 justify-center">
          <p className="text-2xl">{description}</p>
          <div className="flex gap-6">
            <Image width={80} height={80} className="" src={image || "/images/user/user-01.png"} alt={title2} />
            <div className="flex flex-col justify-center">
              <h2 className="text-xl font-bold text-black">{title}</h2>
              <p className="text-primary font-semibold">{title2}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SingleTestimonial;
