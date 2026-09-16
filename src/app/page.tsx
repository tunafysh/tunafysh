"use client";
import { useMobile } from "@/hooks/use-mobile";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
    const mobile = useMobile();
    const router = useRouter();
    useEffect(() => {
        if (typeof window !== undefined) {
            const isTouch = window.matchMedia("(pointer: coarse)").matches;
            if (mobile && isTouch) {
                router.replace("/mobile");
            }
        }
    });

    return <div>Something is coming...</div>;
}
