import { Dispatch, SetStateAction } from "react"
import { Rnd } from "react-rnd"

export default function Window({title, active, setactive}: {title: string, active: boolean, setactive: Dispatch<SetStateAction<boolean>>}) {
    return (
        <Rnd default={{ x: 0, y: 0, width: 800, height: 600 }}
        style={{
            display: active ? "block" : "none",
            position: "fixed",
            borderRadius: "10px",
        }}>

            <div id="windowbar" className="bg-[hsla(0,0%,14%,0.92)] pl-2.5 bg-clip-border w-full flex justify-between items-center rounded-t-lg border-gray h-8 text-white">
                <p>{title}</p>
                <ul className="h-full flex gap-0.5 ">
                    <li><button className="h-full aspect-square text-center">_</button></li>
                    <li><button className="h-full aspect-square bg-center bg-no-repeat bg-contain" style={{backgroundImage: "url(data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Crect x='5' y='5' width='14' height='14' rx='2'/%3E%3C/svg%3E)"}}></button></li>
                    <li><button className="h-full aspect-square text-center hover:bg-red-500 hover:rounded-tr-lg" onClick={() => setactive(!active)}>X</button></li>
                </ul>
            </div>
            <iframe src="https://ovsx.vercel.app" className="-z-10 rounded-b-lg" width="100%" height="93%"></iframe>
        </Rnd>
    )
}