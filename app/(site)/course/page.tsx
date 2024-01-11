"use client";

import CategoryHeader from "@/components/Common/CategoryHeader";
import SingleCourse from "@/components/Courses/SingleCourse";
import { HeroIcon } from "@/components/Icon";
import { getCategory, getCourse } from "@/networking/controller";
import { useQuery } from "react-query";
import Pagination from "@/components/Common/Pagination";
import { useState } from "react";
import Input from "@/components/Core/Input";



const AllCourse = () => {
    const [page, setPage] = useState(1);
    const [SelectedCat, setSelectedCat] = useState<string | null>(null);
    const [allCat, setAllCat] = useState<Array<string> | null>(null);
    const { data: catData } = useQuery("categorie", getCategory, {
        onSuccess(data) {
            const array: Array<string> = []
            data?.forEach((item) => {
                return array.push(item.title);
            })
            setAllCat(() => array);
        }
    });

    const { data, isLoading } = useQuery({
        queryKey: ["course", page, SelectedCat],
        queryFn: () => {
            return getCourse(page, SelectedCat)
        },
        keepPreviousData: true,
        enabled: true,
    })
    return (
        <section className="pb-20 pt-35 lg:pb-25 xl:pb-30">
            <CategoryHeader headerInfo={{
                subtitle: "Archives: Courses",
                description: undefined,
                classname: undefined
            }} />
            <div className="max-w-c-1315 px-4 md:px-8 2xl:px-0 mx-auto">
                <div className="md:flex justify-between items-center mt-10">
                    <div>
                        <h2 className="text-md font-sans text-black dark:text-white">Showing {page}-{data && data?.count > 6 ? page * 6 : data?.count} Of {data?.count} Results</h2>
                    </div>

                    <div>
                        <div className="flex justify-between bg-stroke rounded-md h-15 p-4 items-center max-w-[80%] md:max-w-[100%] md:mt-0 mt-5">
                            <input placeholder="Search Courses..." className="bg-stroke outline-none" />
                            <HeroIcon iconName="MagnifyingGlassIcon" className="h-5 w-5 text-black cursor-pointer" onClick={() => {
                                console.log("clicked")
                            }} />
                        </div>
                        <div className="mt-5 max-w-[80%] md:max-w-[100%]">
                            {allCat &&
                                <Input
                                    type="text"
                                    placeholder="Category"
                                    value={SelectedCat ? SelectedCat : "Something"}
                                    selector
                                    option={allCat}
                                    name="Choose Category"
                                    onSelect={(e) => { setSelectedCat(() => e.target.value) }} />}
                        </div>

                    </div>

                </div>
                <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
                    {/* <!-- Features item Start --> */}

                    {data && data.results.map((feature, key) => (
                        <SingleCourse feature={feature} key={key} />
                    ))}
                    {/* <!-- Features item End --> */}
                </div>

                <div className="flex items-center justify-center mt-20">
                    <Pagination total={data?.count} next={data?.next} previous={data?.previous} setPage={setPage} page={page} />
                </div>

            </div>
        </section>
    )

}

export default AllCourse;