"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { HeroIcon } from "../Icon";

type HeaderInfo = {
    subtitle: string;
    description?: string;
    classname?: string
};

const CategoryHeader = ({ headerInfo }: { headerInfo: HeaderInfo }) => {
    const { subtitle, description, classname } = headerInfo;
    const [path, setPath] = useState<string[]>([])
    useEffect(() => {
        setPath(() => window.location.pathname.split("/"))
    }, [])

    return (
        <>
            {/* <!-- Section Title Start --> */}
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
                className="animate_top mx-auto text-center bg-hero p-12 flex flex-col"
            >

                <h2 className={`mx-auto mb-4 text-4xl font-bold text-black dark:text-white w-full font-sans xl:text-sectiontitle2 ${classname}`}>
                    {subtitle}
                </h2>
                <div className="flex items-center gap-1 mx-auto">
                    <h2 className="text-metatitle3 font-sans">Home</h2>
                    {path.map((item, index) => (
                        <div className="flex items-center text-center" key={index}>
                            <h2 className="text-metatitle3 font-sans" key={index}>{index === 2 ? subtitle : item}</h2>
                            {index < (path.length - 1) && <HeroIcon iconName='ChevronRightIcon' className="h-4 w-4" solid />}
                        </div>

                    ))}

                </div>
            </motion.div>
            {/* <!-- Section Title End --> */}
        </>
    );
};

export default CategoryHeader;
