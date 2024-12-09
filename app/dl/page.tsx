"use client"
import { ConstructionTxt } from "@/components/construction_txt";

export default function DL() {
    const isProduction = process.env.NODE_ENV === 'production';
    if(isProduction){

        return (
            <div className="h-screen w-full bg-black  bg-dot-orange-500/[0.7] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,transparent)]"></div>
        <ConstructionTxt />
    </div>
        )
    }
    else{

        return (
            <h1 className="text-center font-bold text-3xl">Hello world</h1>
        )
    }
}