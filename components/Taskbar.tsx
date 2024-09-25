"use client"
import { useEffect, useState } from "react"
import Task from "./Task";
import { CircleIcon } from "@radix-ui/react-icons";
import { NotepadTextIcon } from "lucide-react";

export default function Taskbar() {
    const [ time, setTime ] = useState(() => new Date().toLocaleTimeString())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000);
        return () => clearInterval(intervalId);
    }, [time]);

    return (
        <div className="absolute w-full h-16 top-[calc(100%-4rem)] flex justify-between items-center rounded-t-3xl dark:bg-[hsla(0,0%,14%,1)] bg-[rgba(255,255,255,0.7)] p-2 px-4">
            <div id="startbtn" className="w-11 h-11 bg-[rgba(55,55,55,1)] rounded-full cursor-pointer flex justify-center items-center">
                <CircleIcon className="w-8 h-8"/>
            </div>
            <div id="taskmgr" className="flex flex-row gap-2.5">
            <Task img="#FF0000"/>
            <Task img="#00FF00"/>
            <Task img="#0000FF"/>
            </div>
            <div className="flex flex-row gap-2">

            <div suppressHydrationWarning id="notifications" className="font-bold bg-[rgba(55,55,55,1)] rounded-l-full p-2 px-3 pl-4 flex justify-center items-center cursor-pointer"><NotepadTextIcon className="w-4 h-4"/></div>
            <div suppressHydrationWarning id="date" className="font-bold bg-[rgba(55,55,55,1)] rounded-r-full p-2 px-4 cursor-pointer">{time}</div>
            </div>
        </div>
    )
}