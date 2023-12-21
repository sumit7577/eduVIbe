'use client';

import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import Accordian from "@/components/Common/Accordian";
import CategoryHeader from "@/components/Common/CategoryHeader";
import TabCommon from "@/components/Common/Tabs";
import { HeroIcon } from "@/components/Icon";
import { useSetTab } from "@/utils/hooks/common";
import Image from "next/image";
import VideoModal from "@/components/Common/VideoModal";
import { useQuery } from "react-query";
import { getSingleCourse } from "@/networking/controller";


const tabSet = ["Overview", "Curriculum", "Instructor", "Reviews"] as const;

interface singleCourse {
  params: { id: string },
  searchParams: {}
}

const SingleCoursePage = (props: singleCourse) => {
  const { tab, setTab } = useSetTab<typeof tabSet[number]>(tabSet[0]);
  const id = props.params.id;
  const { data, isError, isLoading } = useQuery("singleCourse", () => getSingleCourse(id));
  return (
    <>
      {data && data.length > 0 ? <>
        <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
          <div className="mx-auto max-w-full">
            <CategoryHeader headerInfo={{
              subtitle: data[0].title,
              description: undefined,
              classname: undefined
            }} />
            <div className="max-w-c-1315 px-4 md:px-8 2xl:px-0 mx-auto">
              <div className="w-full max-h-[50%] mt-15">
                <Image src={data[0].image ? data[0].image : "/images/hero/hero-light.svg"} alt={"course banner"} height={400} width={400} className="max-h-[35rem] w-full object-cover" />
              </div>

              <div className="md:flex justify-between gap-8 md:px-20 sm:px-10">

                <div className="flex flex-col md:basis-[65%]">
                  <div className="flex my-2 mt-4 gap-20 py-4">
                    <div className="flex gap-2 items-center">
                      <Image src="/images/user/user-01.png" alt={"educator"} height={30} width={30} />
                      <h2 className="text-md font-semibold text-black font-sans">{data[0].instructor.username}</h2>
                    </div>
                    <div className="flex gap-2 items-center">
                      <HeroIcon iconName={'StarIcon'} className="h-5 w-5 text-yellow-500" solid />
                      <p>(5.0)</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-10">
                    <h2 className="text-sectiontitle2 text-black dark:text-white font-bold font-sans">{data[0].title}</h2>
                    <TabCommon names={tabSet} setTab={setTab} activeTab={tab} />
                  </div>


                  <div className={`${tab === "Overview" ? "block" : "hidden"}`}>
                    <div className="flex flex-col gap-4">
                      <h2 className="text-metatitle2 text-black dark:text-white font-semibold font-sans">Course Description</h2>
                      <p className="text-regular font-normal text-gray-800 font-sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis</p>
                      <p className="text-regular font-normal text-gray-800 font-sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    </div>
                  </div>

                  <div className={`${tab === "Curriculum" ? "block" : "hidden"}`}>
                    {data[0].lessons.map((item, index) => (
                      <Accordian lesson={item} key={index} />
                    ))}
                  </div>

                  <div className={`${tab === "Instructor" ? "block" : "hidden"} flex items-center gap-4`}>
                    <div className="border basis-1/3">
                      <Image src="/images/blog/blog-01.png" alt={"educator"} height={250} width={200} className="w-[200px] h-[232px] object-cover rounded-md" />
                    </div>
                    <div>
                      <h2 className="text-metatitle2 font-semibold text-black dark:text-white font-sans">
                        {data[0].instructor.username}
                      </h2>
                      <h2 className="text-primary font-semibold text-md font-sans">{data[0].instructor.email}</h2>
                      <p className="text-md font-sans py-2">
                        Janet Fleming is an instructor, blogger, and designer living in a suburb of Washington, DC. She has been assigned to aspen ecosystems research and has been involved in several special assignments.
                      </p>
                    </div>

                  </div>

                  <div className={`${tab === "Reviews" ? "block" : "hidden"}`}>
                    <h2 className="text-metatitle2 text-black text-center font-bold font-sans">Coming Soon</h2>
                  </div>
                </div>


                <div className="bg-white rounded-md shadow-md p-4 md:basis-[30%] md:relative md:bottom-12">
                  <div>
                    {/*<VideoModal thumb="images/blog/blog-01.png" thumbWidth={0} thumbHeight={0} thumbAlt={""} video={""} videoWidth={0} videoHeight={0} />*/}
                    <Image src={data[0].image ? data[0].image : "/images/blog/blog-01.png"} height={400} width={400} alt="demo video" />
                  </div>
                  <div className="flex flex-col p-4">
                    <div className="flex justify-between items-center border-b-2 border-stroke py-4 px-2">
                      <div className="flex items-center gap-1 text-md font-semibold font-sans">
                        <HeroIcon iconName='ClockIcon' className="h-4 w-4 text-primary" />
                        Duration
                      </div>
                      <h2 className="text-md font-semibold font-sans">{data[0].duration}</h2>
                    </div>

                    <div className="flex justify-between items-center border-b-2 border-stroke py-4 px-2">
                      <div className="flex items-center gap-1 text-md font-semibold font-sans">
                        <HeroIcon iconName='UserGroupIcon' className="h-4 w-4 text-primary" />
                        Students
                      </div>
                      <h2 className="text-md font-semibold font-sans">{data[0].students.length}</h2>
                    </div>

                    <div className="flex justify-between items-center border-b-2 border-stroke py-4 px-2">
                      <div className="flex items-center gap-1 text-md font-semibold font-sans">
                        <HeroIcon iconName="DocumentTextIcon" className="h-4 w-4 text-primary" />
                        Lessons
                      </div>
                      <h2 className="text-md font-semibold font-sans">{data[0].lessons.length}</h2>
                    </div>

                    <div className="flex justify-between items-center border-b-2 border-stroke py-4 px-2">
                      <div className="flex items-center gap-1 text-md font-semibold font-sans">
                        <HeroIcon iconName='UserIcon' className="h-4 w-4 text-primary" />
                        Instructor
                      </div>
                      <h2 className="text-md font-semibold font-sans">{data[0].instructor.username}</h2>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center text-center gap-4 px-4 py-4">
                    <h2 className="border border-primary bg-stroke rounded-md p-4 text-md font-bold font-sans text-primary">
                      Price: {parseInt(data[0].price.toString()).toLocaleString("en-US", { style: "currency", currency: "INR" })}
                    </h2>
                    <h2 className="border-2 bg-primary text-white rounded-md p-4 text-md font-bold font-sans cursor-pointer hover:bg-strokedark">
                      Buy Now
                    </h2>
                  </div>

                </div>

              </div>


            </div>

          </div>
        </section>
      </>
        : null
      }
    </>
  );
};

export default SingleCoursePage;
