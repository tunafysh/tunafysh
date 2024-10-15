import { Dispatch, SetStateAction, } from "react"
import { motion } from "framer-motion"

export default function Task({ img, active, setactive }: { img: string, active: boolean, setactive: Dispatch<SetStateAction<boolean>> }) {

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

    return (
        <motion.div className="flex flex-col justify-center items-center" transition={{ duration: 1 }} onClick={() => {setactive(!active); console.log(active)}}>
        <motion.div className={`bg-[${img}] w-8 h-8 rounded-full cursor-pointer mb-1 `} transition={{ duration: 1 }}></motion.div>
        <motion.div className="h-1 rounded-full" variants={taskVariants} initial="inactive" animate={active ? "active" : "inactive"} transition={{ duration: 0.25 }}></motion.div>
        </motion.div>
    )
}