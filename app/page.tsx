"use client";

import Taskbar from "@/components/Taskbar";
import WindowManager from "@/components/wm";
import Window from "@/components/Window";
import { useState } from "react";

export default function Home() {
  const [active, setactive] = useState(false)

  return (
    <>
    <WindowManager>
      <Window title="Test" active={active} setactive={setactive}/>
      </WindowManager>
    <div id="wallpaper" className="absolute w-full h-full bg-[url('/wllp.png')] bg-cover bg-center bg-no-repeat -z-10"></div>
    <Taskbar active={active} setactive={setactive}/>
    </>
  );
}
