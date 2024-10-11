import { Rnd } from "react-rnd"

export default function Window({title}: {title: string}) {

    return (
        <Rnd default={{ x: 0, y: 0, width: 800, height: 600 }}
        style={{
            position: "fixed",
            borderRadius: "10px",
        }}>

            <div id="windowbar" className="bg-[rgba(55,55,55,1)] font-semibold pl-2.5 bg-clip-border w-full flex justify-between items-center rounded-t-lg border-gray h-10 text-white">
                <p>{title}</p>
                <ul>
                    <li><button className="h-full aspect-square"></button></li>
                    <li><button className="h-full aspect-square"></button></li>
                    <li><button className="h-full aspect-square"></button></li>
                </ul>
            </div>
            <iframe src="https://ovsx.vercel.app" className="-z-10 rounded-b-lg" width="100%" height="93%"></iframe>
        </Rnd>
    )
}