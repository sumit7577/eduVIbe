import React from 'react'
import { TeamData } from './teamData'
import Image from "next/image";

export default function SingleTeam({ data }: { data: typeof TeamData[0] }) {
    const { id, image, title, proffession } = data;
    return (
        <div className="animate_top group relative rounded-lg border border-stroke bg-stroke p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[30%] lg:w-1/5 sm:w-[70%] xl:p-12.5 group">
            <Image src={image} alt={title} height={200} width={200} className='h-full w-full' />
            <div className='rounded-md bg-white absolute -bottom-5 p-8 w-[14rem] hidden group-hover:block ease-in 300 gap-4'>
                <h2 className='text-xl font-semibold text-black font-sans'>{title}</h2>
                <p className='text-sm font-medium text-gray-500 font-sans my-2'>{proffession}</p>
            </div>
        </div>
    )
}
