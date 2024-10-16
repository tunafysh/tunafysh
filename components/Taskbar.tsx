"use client"
import { useEffect, useState } from "react"
import { CircleIcon } from "@radix-ui/react-icons";
import { NotepadTextIcon } from "lucide-react";
import { motion } from "framer-motion";

interface TaskbarProps {
    children: React.ReactNode
    className?: string
}

export default function Taskbar(props: TaskbarProps) {
    const [ time, setTime ] = useState(() => new Date().toLocaleTimeString())
    const [ startmenu, setStartmenu ] = useState(false)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000);
        return () => clearInterval(intervalId);
    }, [time]);

    const taskbarVariants = {
        "default": {
            height: "4rem"
        },
        "startmenu": {
            height: "32rem"
        }
    }

    return (
        <motion.div className={`fixed bottom-0 w-full flex items-end rounded-t-3xl bg-[hsla(0,0%,14%,0.7)] p-2 px-4`}
        variants={taskbarVariants} initial="default" animate={startmenu ? "startmenu" : "default"}>
            <div className="flex justify-between w-full items-end">
            <div id="startbtn" onClick={() => setStartmenu(!startmenu)} className="w-11 h-11 bg-[rgba(55,55,55,1)] rounded-full cursor-pointer flex justify-center items-center">
                <CircleIcon className="w-8 h-8"/>
            </div>
            <div id="taskmgr" className="flex flex-row gap-2.5">
            {props.children}
            </div>
            <div className="flex flex-row gap-2">

            <div suppressHydrationWarning id="notifications" className="font-bold bg-[rgba(55,55,55,1)] rounded-l-full p-2 px-3 pl-4 flex justify-center items-center cursor-pointer"><NotepadTextIcon className="w-4 h-4"/></div>
            <div suppressHydrationWarning id="date" className="font-bold bg-[rgba(55,55,55,1)] rounded-r-full p-2 px-4 cursor-pointer">{time}</div>
            </div>
            </div>
        </motion.div>
    )
}