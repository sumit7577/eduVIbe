"use client"

import React from "react"
import { HeroIcon } from "../Icon"


const Accordian = () => {
    const [show, setShow] = React.useState<boolean>(false);
    return (
        <>
            <div className="flex flex-col bg-white rounded-md shadow-lg p-5 px-8">
                <button
                    className={`flex cursor-pointer items-center justify-between text-metatitle2 font-semibold ${show ? "text-primary" : "text-black"}  font-sans`}
                    onClick={() => {
                        setShow(() => !show)
                    }}
                >
                    Welcome And First Steps

                    {show ? <HeroIcon iconName='ChevronUpIcon' solid className="h-4 w-4 text-primary" /> :
                        <HeroIcon iconName='ChevronDownIcon' solid className="h-4 w-4 text-black" />}
                </button>
                <ul className={`${show ? "block" : "hidden"}`}>
                    {Array.from({ length: 5 }).map((item,index) => (
                        <li className="py-4 border-b rounded-sm" key={index}>
                            <a href="#" className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <HeroIcon iconName='DocumentTextIcon' className="h-4 w-4" />
                                    <h2 className="text-md font-semibold font-sans">Preview of the course</h2>
                                </div>
                                <div className="flex items-center gap-2">
                                    <h2 className="text-white bg-primary rounded-sm p-1 px-3 text-xs font-semibold font-sans">Preview</h2>
                                    <HeroIcon iconName="LockClosedIcon" className="h-4 w-4" />
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