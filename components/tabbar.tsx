"use client"

import { motion, AnimatePresence } from "motion/react"
import { X } from 'lucide-react'
import { ReactNode, useState } from "react"
import MainScreen from "@/components/screens/main"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CatalystScreen, TictactoeScreen, CreprintScreen } from "@/components/screens/screens"
/*
{ id: "2", title: "Catalyst", screen: <CatalystScreen/> },
  { id: "3", title: "Tictactoe", screen: <TictactoeScreen/> },
  { id: "4", title: "Creative Print", screen: <CreprintScreen/> },
*/
interface Page {
  id: string
  title: string
  screen: ReactNode
}

const initialPages: Page[] = [
  { id: "1", title: "Main", screen: <MainScreen /> },
]

const tabVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
}

export default function IframeTabs() {
  const [pages, setPages] = useState<Page[]>(initialPages)
  const [currentPageId, setCurrentPageId] = useState(pages[0].id)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const addPage = (page: Page) => {
    const newPage: Page = {
      id: page.id,
      title: page.title,
      screen: page.screen
    }
    setPages([...pages, newPage])
    setCurrentPageId(newPage.id)
  }

  const removePage = (id: string) => {
    const newPages = pages.filter(page => page.id !== id)
    setPages(newPages)
    if (currentPageId === id) {
      setCurrentPageId(newPages[newPages.length - 1]?.id || "")
    }
  }

  return (
    <div className="w-full h-screen flex flex-col bg-gray-900">
      <AnimatePresence>
        {pages.length > 1 && (
          <motion.div
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="w-full h-12 border-b-2 border-gray-700 flex items-center px-2 select-none"
            transition={{delay: 0.5}}
          >
            <div className="flex space-x-2 gap-2 select-none">
              {pages.map((page) => (
                <motion.div
                  key={page.id}
                  onClick={() => setCurrentPageId(page.id)}
                  className={`relative flex items-center px-4 py-2 rounded-lg cursor-pointer select-none ${
                    currentPageId === page.id ? 'bg-white hover:bg-white/70 text-black' : 'bg-gray-800 hover:bg-gray-700 text-gray-400'
                  }`}
                  layout
                >
                  <span className="mr-2">{page.title}</span>
                  {page.id === "1"? <></>: <button
                    onClick={(e) => {
                      e.stopPropagation()
                      removePage(page.id)
                    }}
                    className="p-1 rounded-full hover:bg-red-500 hover:text-white"
                    aria-label={`Close ${page.title} tab`}
                  >
                    <X className="h-4 w-4" />
                  </button>}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex-grow relative">
        {pages.map((page) => (
          <div
            key={page.id}
            className={`absolute inset-0 ${currentPageId === page.id ? "block" : "hidden"}`}
          >
            {page.screen}
          </div>
        ))}
      </div>
    </div>
  )
}

