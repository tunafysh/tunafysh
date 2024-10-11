"use client";

import Taskbar from "@/components/Taskbar";
import WindowManager from "@/components/wm";
import Window from "@/components/Window";

export default function Home() {
  

  return (
    <>
    <WindowManager>
      <Window title="Test"/>
      </WindowManager>
    <div id="wallpaper" className="absolute w-full h-full bg-[url('/wllp.png')] bg-cover bg-center bg-no-repeat -z-10"></div>
    <Taskbar/>
    </>
  );
}
