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
import { SingleCourse, completeCheckout, getSingleCourse } from "@/networking/controller";
import { SetStateAction, useEffect, useState } from "react";
import { BASE_URL } from "@/networking";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import Modal from "@/components/Common/Modal";
import PaymentModal from "@/components/Common/paymentModal";


const tabSet = ["Overview", "Curriculum", "Instructor", "Reviews"] as const;

interface singleCourse {
  params: { id: string },
  searchParams: {}
}

const IsPaidPage = (props: { data: SingleCourse }) => {
  const { data, instructur, paid } = props.data;
  const [video, selectedVideo] = useState<string>("")
  return (
    <div className="pb-20 pt-40">
      <div className="bg-primary p-4 mb-4 rouned-md">
        <h2 className="text-white text-lg font-semibold font-sans">{data[0].title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:px-10 px-5 overflow-auto min-h-[70vh]">
        <div className="md:col-span-4 bg-black rounded-md shadow-lg sticky max-h-fit">
          {video !== "" && <iframe src={video} loading="lazy" className="border" style={{ width: "100%", border: 0, height: "100%" }} allowFullScreen={true} allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"></iframe>}
        </div>
        <div className="md:col-span-2 flex flex-col gap-4 overflow-scroll min-h-min">
          <h2 className="rounded-md bg-white p-4 shadow-lg text-black font-semibold font-sans text-md">Course Content</h2>
          {data[0].lessons.map((item, index) => (
            <Accordian lesson={item} key={index} paid={true} selectedVideo={video} selectVideo={selectedVideo} lessonIndex={index} />
          ))}
        </div>
      </div>

    </div>
  )
}

const SingleCoursePage = (props: singleCourse) => {
  const { tab, setTab } = useSetTab<typeof tabSet[number]>(tabSet[0]);
  const router = useRouter();
  const { authState, isUserAuthenticated } = useAuth();
  const [paymentModal, setPaymentModal] = useState<boolean>(false)
  const [paymentUi,setPaymentUi] = useState<string>("")
  const id = props.params.id;
  const { data, isError, isLoading } = useQuery("singleCourse", () => getSingleCourse(id));
  
  useEffect(() => {
  }, [authState.token])

  const purchaseCourse = () => {
    if (isUserAuthenticated()) {
      setPaymentModal(() => true)
      completeCheckout(id).then(data => {
        setPaymentUi(data);
      })
    }
    else {
      router.push("auth/signin")
    }
  }
  if (data && data?.paid) {
    return <IsPaidPage data={data} />
  }
  return (
    <>
      {data && data.data.length > 0 ? <>
        <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
          <PaymentModal src={paymentUi} setModal={setPaymentModal} open={paymentModal} />
          <div className="mx-auto max-w-full">
            <CategoryHeader headerInfo={{
              subtitle: data.data[0].title,
              description: undefined,
              classname: undefined
            }} />
            <div className="max-w-c-1315 px-4 md:px-8 2xl:px-0 mx-auto">
              <div className="w-full max-h-[50%] mt-15">
                <Image src={data.data[0].image ? data.data[0].image : "/images/hero/hero-light.svg"} alt={"course banner"} height={400} width={400} className="max-h-[35rem] w-full object-cover" />
              </div>

              <div className="md:flex justify-between gap-8 md:px-20 sm:px-10">

                <div className="flex flex-col md:basis-[65%]">
                  <div className="flex my-2 mt-4 gap-20 py-4">
                    <div className="flex gap-2 items-center">
                      <Image src={data.data[0].instructor.image ? data.data[0].instructor.image : "/images/user/user-01.png"} alt={"educator"} height={30} width={30} />
                      <h2 className="text-md font-semibold text-black font-sans">{data.data[0].instructor.username}</h2>
                    </div>
                    <div className="flex gap-2 items-center">
                      <HeroIcon iconName={'StarIcon'} className="h-5 w-5 text-yellow-500" solid />
                      <p>(5.0)</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-10">
                    <h2 className="text-sectiontitle2 text-black dark:text-white font-bold font-sans">{data.data[0].title}</h2>
                    <TabCommon names={tabSet} setTab={setTab} activeTab={tab} />
                  </div>


                  <div className={`${tab === "Overview" ? "block" : "hidden"}`}>
                    <div className="flex flex-col gap-4">
                      {data.data[0].overview.map((item, index) => (
                        <div className="list-decimal">
                          <div className="text-metatitle2 text-black dark:text-white font-semibold font-sans" dangerouslySetInnerHTML={{ __html: item.title }} />
                          <div className="text-regular font-normal text-gray-800 font-sans" dangerouslySetInnerHTML={{ __html: item.description }} />
                        </div>
                      ))}

                    </div>
                  </div>

                  <div className={`${tab === "Curriculum" ? "block" : "hidden"}`}>
                    {data.data[0].lessons.map((item, index) => (
                      <Accordian lesson={item} key={index} />
                    ))}
                  </div>

                  <div className={`${tab === "Instructor" ? "block" : "hidden"} grid md:grid-cols-6 sm:grid-cols-1 gap-4`}>
                    <div className="border bg-white dark:bg-strokedark rounded-md col-span-2">
                      <Image src={data.data[0].instructor.image ?? "/images/user/user-01.png"} alt={"educator"} height={200} width={200} className="w-full max-h-full object-cover" />
                    </div>
                    <div className="flex flex-col mt-4">
                      <h2 className="text-metatitle2 font-semibold text-black dark:text-white font-sans">
                        {data.data[0].instructor.username}
                      </h2>
                      <h2 className="text-primary font-semibold text-md font-sans">{data.data[0].instructor.email}</h2>
                      <p className="text-md font-sans py-2">
                        {data.data[0].instructor.about_us}
                      </p>
                    </div>

                  </div>

                  <div className={`${tab === "Reviews" ? "block" : "hidden"}`}>
                    <h2 className="text-metatitle2 text-black text-center font-bold font-sans">Coming Soon</h2>
                  </div>
                </div>


                <div className="bg-white rounded-md shadow-md p-4 md:basis-[30%] md:relative md:bottom-12 mt-10 md:mt-0">
                  <div>
                    {data.data[0].video_details !== null ?
                      <VideoModal thumb="/images/blog/blog-01.png" thumbWidth={400} thumbHeight={400} thumbAlt={"demo video"} video={data.data[0].video_details} videoWidth={800} videoHeight={800} /> :
                      <Image src={data.data[0]?.image ?? "/images/blog/blog-01.png"} width={400} height={400} alt="Course Demo" />
                    }

                  </div>
                  <div className="flex flex-col p-4">
                    <div className="flex justify-between items-center border-b-2 border-stroke py-4 px-2">
                      <div className="flex items-center gap-1 text-md font-semibold font-sans">
                        <HeroIcon iconName='ClockIcon' className="h-4 w-4 text-primary" />
                        Duration
                      </div>
                      <h2 className="text-md font-semibold font-sans">{data.data[0].duration}</h2>
                    </div>

                    <div className="flex justify-between items-center border-b-2 border-stroke py-4 px-2">
                      <div className="flex items-center gap-1 text-md font-semibold font-sans">
                        <HeroIcon iconName='UserGroupIcon' className="h-4 w-4 text-primary" />
                        Students
                      </div>
                      <h2 className="text-md font-semibold font-sans">{data.data[0].students.length}</h2>
                    </div>

                    <div className="flex justify-between items-center border-b-2 border-stroke py-4 px-2">
                      <div className="flex items-center gap-1 text-md font-semibold font-sans">
                        <HeroIcon iconName="DocumentTextIcon" className="h-4 w-4 text-primary" />
                        Lessons
                      </div>
                      <h2 className="text-md font-semibold font-sans">{data.data[0].lessons.length}</h2>
                    </div>

                    <div className="flex justify-between items-center border-b-2 border-stroke py-4 px-2">
                      <div className="flex items-center gap-1 text-md font-semibold font-sans">
                        <HeroIcon iconName='UserIcon' className="h-4 w-4 text-primary" />
                        Instructor
                      </div>
                      <h2 className="text-md font-semibold font-sans">{data.data[0].instructor.username}</h2>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center text-center gap-4 px-4 py-4">
                    <h2 className="border border-primary bg-stroke rounded-md p-4 text-md font-bold font-sans text-primary">
                      Price: {parseInt(data.data[0].price.toString()).toLocaleString("en-US", { style: "currency", currency: "INR" })}
                    </h2>
                    <h2 className="border-2 bg-primary text-white rounded-md p-4 text-md font-bold font-sans cursor-pointer hover:bg-strokedark" onClick={purchaseCourse}>
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
