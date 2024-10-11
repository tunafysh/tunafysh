import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Task({ img }: { img: string }) {
    const [isActive, setIsActive] = useState(false)

    const taskVariants = {
        "active": {
            width: "1.25rem",
            backgroundColor: "#00FF00"
        },
        "inactive": {
            backgroundColor: "gray",
            width: "0.5rem"
        }
    }

    useEffect(() => {
        setIsActive(isActive)
    }, [isActive])
    return (
        <motion.div className="flex flex-col justify-center items-center" transition={{ duration: 1 }} onClick={() => {setIsActive(!isActive); console.log(isActive)}}>
        <motion.div className={`bg-[${img}] w-8 h-8 rounded-full cursor-pointer mb-1 `} transition={{ duration: 1 }}></motion.div>
        <motion.div className="h-1 rounded-full" variants={taskVariants} initial="inactive" animate={isActive ? "active" : "inactive"} transition={{ duration: 0.25 }}></motion.div>
        </motion.div>
    )
}