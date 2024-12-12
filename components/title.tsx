'use client'

import { useState, useEffect, ReactNode, Children } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import clsx from 'clsx'

interface FadeInOutProps {
  children: ReactNode[]
  duration?: number
  className?: string
}

export function FadeInOut({ children, duration = 3000 }: FadeInOutProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < Children.count(children) - 1) {
      const timer = setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1)
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [currentIndex, children, duration])

  const FADE_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 10, transition: { type: 'spring', duration: 0.5 } },
    exit: { opacity: 0, y: 0, transition: { duration: 0.5 } },
  }

  return (
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute w-full"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={FADE_ANIMATION_VARIANTS}
        >
          <motion.div
        className={clsx(
            "text-center font-display font-bold drop-shadow-sm",
            "text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
            "tracking-[-0.02em]",
            "md:leading-[4rem] lg:leading-[4.5rem] xl:leading-[5rem]"
          )}
        variants={FADE_ANIMATION_VARIANTS}
      >
          {Children.toArray(children)[currentIndex]}
      </motion.div>
        </motion.div>
      </AnimatePresence>
  )
}

