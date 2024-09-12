import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Task({ img }: { img: string }) {
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        setIsActive(isActive)
    }, [isActive])
    return (
        <motion.div className="flex flex-col justify-center items-center" transition={{ duration: 1 }} onClick={() => {setIsActive(!isActive); console.log(isActive)}}>
        <motion.div className={`bg-[${img}] w-8 h-8 rounded-full cursor-pointer ${isActive? "mb-1": ""}`} transition={{ duration: 1 }}></motion.div>
        <motion.div id="dot" className={isActive? "bg-[#00FF00] w-2 h-1 rounded-full": ""} transition={{ duration: 1 }}></motion.div>
        </motion.div>
    )
}