"use client"

import BlogItem from "@/components/Blog/BlogItem";
import CategoryHeader from "@/components/Common/CategoryHeader";
import { getBlogs } from "@/networking/controller";
import { useState } from "react";
import { useQuery } from "react-query";
import Pagination from "@/components/Common/Pagination";


const BlogPage = () => {
  const [page, setPage] = useState(1);

  const { data } = useQuery({
    queryKey: ['blog', page],
    queryFn: () => getBlogs(page),
    keepPreviousData: true,
  });
  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
        <CategoryHeader headerInfo={{
          subtitle: "Blog",
          description: undefined,
          classname: undefined
        }} />
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-2 xl:gap-10">
            {data?.results.map((post, key) => (
              <BlogItem key={key} blog={post} />
            ))}
          </div>
          <div className="flex items-center justify-center mt-20">
            <Pagination total={data?.count} next={data?.next} previous={data?.previous} setPage={setPage} page={page} />
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default BlogPage;
