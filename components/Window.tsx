import { Resizable } from "re-resizable"
import { useState } from "react"

export default function Window({title}: {title: string}) {
    const [ position, setPosition] = useState({ x: 0, y: 0 })

    return (
        <Resizable
        defaultSize={{ width: 600, height: 400 }}
        style={{
            position: "fixed",
            background: "white",
            borderRadius: "10px",
            top: position.y,
            left: position.x,
        }}>

            <div id="windowbar" className="w-full border-b-[1px] border-gray h-10" onDrag={(e) => setPosition({ x: e.x, y: e.y }))}>{title}</div>
            <div id="windowcontent" className="w-full h-full overflow-auto rounded-b-lg">
                    <iframe src="https://ovsx.vercel.app" width="100%" height="100%"></iframe>
            </div>
        </Resizable>
    )
}