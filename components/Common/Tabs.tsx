'use client'
import { motion } from 'framer-motion'
import { Dispatch, SetStateAction, useState } from 'react'

type CommonTab = {
    names: Readonly<string[]>,
    setTab: Dispatch<SetStateAction<string>>,
    activeTab: string

}
const TabCommon = (props: CommonTab) => {
    const { names, setTab, activeTab } = props;
    return (
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
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top mb-10 flex flex-wrap justify-center rounded-[10px] border bg-stroke dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6 md:flex-nowrap md:items-center lg:gap-7.5 xl:gap-12.5"
        >
            {names.map((item, index) => (
                <div
                    key={index}
                    onClick={() => setTab(item)}
                    className={`relative cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-8 xl:py-5 ${activeTab === item
                        ? "active before:absolute before:bottom-0 before:left-0 before:h-[0.15rem] before:w-full before:rounded-tl-[2px] before:rounded-tr-[2px] before:bg-primary"
                        : ""
                        }`}
                >
                    <div className="md:w-3/5 lg:w-auto">
                        <button className={`text-sm font-semibold text-black dark:text-white xl:text-regular ${activeTab === item && "text-primary"}`}>
                            {item}
                        </button>
                    </div>
                </div>
            ))}

        </motion.div>
    )
}

export default TabCommon;