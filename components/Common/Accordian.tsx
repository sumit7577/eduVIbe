"use client"

import React from "react"
import { HeroIcon } from "../Icon"
import { sectionResponse } from "@/networking/types"

interface accordianProps {
    lesson: typeof sectionResponse
}

const Accordian = (props: accordianProps) => {
    const [show, setShow] = React.useState<boolean>(false);
    const { lesson } = props;
    return (
        <>
            <div className="flex flex-col bg-white rounded-md shadow-md border-stroke p-5 px-8 mt-4">
                <button
                    className={`flex cursor-pointer items-center justify-between text-metatitle2 font-semibold ${show ? "text-primary" : "text-black"}  font-sans`}
                    onClick={() => {
                        setShow(() => !show)
                    }}
                >
                    {lesson.title}

                    {show ? <HeroIcon iconName='ChevronUpIcon' solid className="h-4 w-4 text-primary" /> :
                        <HeroIcon iconName='ChevronDownIcon' solid className="h-4 w-4 text-black" />}
                </button>
                <ul className={`${show ? "block" : "hidden"} mt-2`}>
                    {lesson.video.map((item, index) => (
                        <li className="py-4 border-b rounded-sm" key={index}>
                            <a href="#" className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <HeroIcon iconName='DocumentTextIcon' className="h-4 w-4" />
                                    <h2 className="text-md font-semibold font-sans">{item.title}</h2>
                                </div>
                                <div className="flex items-center gap-2">
                                    <h2 className="text-white bg-primary rounded-sm p-1 px-3 text-xs font-semibold font-sans">Preview</h2>
                                    {item.locked && <HeroIcon iconName="LockClosedIcon" className="h-4 w-4" />}
                                </div>
                            </a>
                        </li>
                    ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Accordian