"use client"

import { useState } from "react";
import Image from "next/image";
import { HeroIcon, IconName } from "../Icon";
import Link from "next/link";
import { useAuth } from "@/app/context/AuthContext";


export type MenuData = Array<{
    name: string,
    icon: IconName,
    path?: "",
    onClick?: () => void
}>
interface MenuProps {
    image?: boolean,
    item: MenuData,
    title?: string
}

const AppMenu = (props: MenuProps) => {
    const [dropdownToggler, setDropdownToggler] = useState(false);
    const { item, image, title } = props;
    const { authState } = useAuth()
    return (
        <div className="relative group">
            <button
                onClick={() => setDropdownToggler(!dropdownToggler)}
                className="flex cursor-pointer items-center justify-between gap-3 hover:text-primary text-md font-semibold text-black font-sans"
            >
                {!image ? title : <Image src={authState.user?.image ?? "/images/user/user-01.png"} alt="user" height={40} width={40} />}
                {!image ? <HeroIcon className="h-5 w-5" iconName="ChevronDownIcon" solid /> : title}
            </button>

            <ul
                className={`menu ${dropdownToggler ? "flex" : ""}`}
            >
                {item.map((item, key) => (
                    <li key={key} className="hover:bg-primary rounded-md">
                        <div className="flex items-center p-3 gap-2 group/div" onClick={item.onClick}>
                            <HeroIcon className="h-5 w-5 group-hover/div:text-white" iconName={item.icon} />
                            <h2 className="text-md font-semibold font-sans text-black group-hover/div:text-white">{item.name}</h2>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AppMenu;