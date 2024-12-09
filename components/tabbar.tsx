import { motion } from "motion/react";
import { Children, ReactNode } from "react";

export function Tab({ title, icon, status }: {title: string, icon: ReactNode, status: 'closed' | 'open' | 'indestructible'}) {
    return (
      <div className="w-36 h-8 rounded-md ring-1 ring-gray-700 cursor-pointer flex flex-row">
        <div className="w-8 h-8 ">
        {icon}
        </div>
        <h1>{title}</h1>
        {status == 'open'? <div className="w-8 h-8 bg-red-500">X</div>: <></>}
      </div>  
    );
}

interface TabBarProps {
    children: ReactNode;
}

const tabVariants = {
    "hidden": {
        top: -48,
    },
    "visible": {
        top: 0,
    }
}

export default function TabBar({ children }: TabBarProps) {
    const tabCount = Children.count(children);
    console.log(tabCount);
    return (
        <motion.div variants={tabVariants} initial="hidden" animate="visible" className={`w-full h-12 border-b-2 border-gray-700 flex items-center px-2`}>
            {tabCount === 1 ? <></> : (
                <div className="flex space-x-2">
                    {children}
                </div>
            )}
        </motion.div>
    );
}