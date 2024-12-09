"use client"
import { motion } from "motion/react";
import { TabProps, PageProps } from "@/components/defs";
import { Dispatch, SetStateAction } from "react";
import { removePage } from "./pageactions";

export function Tab({ title, status, onClick, setPages, currentPage }: TabProps) {
    if(status == 'closed'){
        return(<></>)
    }
    else{
    return (
        
            <div onClick={onClick} className="w-36 h-8 rounded-md ring-1 ring-gray-700 cursor-pointer flex flex-row items-center pl-5 pr-3 justify-between">
            <h1 className="h-fit font-bold">{title}</h1>
        {status == 'open'? <div className="select-none flex items-center justify-centerw-8 h-8 text-red-500" onClick={() => {
            removePage(setPages, currentPage)
            console.log("click")
            }}>X</div>: <></>}
        </div> 
    )}
}

const tabVariants = {
    "hidden": {
        transform: "translateY(-100%)",
    },
    "visible": {
        transform: "translateY(0%)",
    }
}

export default function TabBar({ pages, currentPage, setCurrentPage, setPages }: {pages: PageProps[], currentPage: number, setCurrentPage: Dispatch<SetStateAction<number>>, setPages: Dispatch<SetStateAction<PageProps[]>>}) {
    return (
        <motion.div variants={tabVariants} initial="hidden" animate={pages.length === 1 ? "hidden" : "visible"} className={`w-full h-12 border-b-2 border-gray-700 flex items-center px-2`} transition={{delay: 0.5}}>
            {pages.length === 1 ? <></> : (
                <div className="flex space-x-2 gap-2">
                    {pages.map((page) => (
                        <Tab key={page.title} currentPage={currentPage} setPages={setPages} title={page.title} status={page.status} onClick={() => setCurrentPage(pages.indexOf(page))} />
                    ))}
                </div>
            )}
        </motion.div>
    );
}