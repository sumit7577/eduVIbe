"use client"

import React, { Dispatch, SetStateAction, useEffect, useState } from "react"
import { HeroIcon } from "../Icon"
import { sectionResponse, videoResponseType } from "@/networking/types"
import { fancyTimeFormat, videoLinkCreator } from "@/utils/helpers/common"

interface accordianProps {
    lesson: typeof sectionResponse,
    paid?: boolean,
    selectVideo?: Dispatch<SetStateAction<string>>,
    selectedVideo?: string,
    lessonIndex?:number
}

const Accordian = (props: accordianProps) => {
    const [show, setShow] = React.useState<boolean>(false);
    const { lesson, paid, selectedVideo, selectVideo,lessonIndex } = props;
    useEffect(() => {
        if (selectVideo && lesson.video.length > 0) {
            const link = videoLinkCreator(lesson.video[0].video_information)
            selectVideo(() => link)
        }
        if (lessonIndex === 0) {
            setShow(() => true)
        }
    }, [lesson])

    const currentVideo = (data:videoResponseType)=>{
        return videoLinkCreator(data.video_information)
    }

    return (
        <>
            <div className="flex flex-col bg-white rounded-md shadow-md border-stroke p-5 px-8 mt-4">
                <button
                    className={`flex cursor-pointer items-center justify-between text-metatitle3 font-semibold ${show ? "text-primary" : "text-black"}  font-sans`}
                    onClick={() => {
                        setShow(() => !show)
                    }}
                >
                    {lesson.title}

                    {show ? <HeroIcon iconName='ChevronUpIcon' solid className="h-4 w-4 text-primary" /> :
                        <HeroIcon iconName='ChevronDownIcon' solid className="h-4 w-4 text-black" />}
                </button>
                <ul className={`${show ? "block" : "hidden"} mt-2`}>
                    {lesson.video?.map((item, index) => (
                        <li className={`${paid && currentVideo(item) === selectedVideo ? "rounded-md bg-stroke p-2 cursor-pointer" : "py-4"} py-4 border-b`} key={index} onClick={() => {
                            if (paid && selectVideo) {
                                const link = videoLinkCreator(item.video_information)
                                selectVideo(() => link)
                            }
                        }}>
                            <div className={`${paid ? "flex-col" : "flex"} justify-between`}>
                                <div className="flex items-center gap-2">
                                    {paid ? <h2 className="text-sm font-sans">{index + 1}.</h2> : <HeroIcon iconName='DocumentTextIcon' className="h-4 w-4" />}
                                    <h2 className="text-sm font-semibold font-sans">{item.title}</h2>
                                </div>
                                {!paid ? <div className="flex items-center gap-2">
                                    <h2 className="text-white bg-primary rounded-sm p-1 px-3 text-xs font-semibold font-sans">Preview</h2>
                                    {item.locked && <HeroIcon iconName="LockClosedIcon" className="h-4 w-4" />}
                                </div> :
                                    <div className="flex items-center gap-2 mt-2 ml-2">
                                        <HeroIcon iconName='PlayCircleIcon' className="h-4 w-4 text-black" />
                                        <h2 className="text-xs font-sans text-black">{fancyTimeFormat(item.video_information.length)}</h2>
                                    </div>
                                }
                            </div>
                        </li>
                    ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Accordian