import {
    FastForward,
    Menu as MenuIcon,
    Pause,
    Play,
    Rewind,
    SkipBack,
    SkipForward,
} from "lucide-react";
import { useClickwheel } from "@/hooks/use-clickwheel";
import React, { useState } from "react";

type ClickwheelProps = {
    itemLength: number;
    setSelected: React.Dispatch<React.SetStateAction<number>>;
    onSelect: () => void;
    onMenu: () => void;
};

function RewindIcon({ className }: { className: string }) {
    return (
        <div className={className}>
            <svg viewBox="0 0 24 24" className="size-4" aria-hidden>
                <path
                    d="M5 5v14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                />
                <path d="M22 5l-9 7 9 7z" fill="currentColor" />
                <path d="M14 5l-9 7 9 7z" fill="currentColor" />
            </svg>
        </div>
    );
}

function FastForwardIcon({ className }: { className: string }) {
    return (
        <div className={className}>
            <svg viewBox="0 0 24 24" className="size-4" aria-hidden>
                <path
                    d="M19 5v14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                />
                <path d="M2 5l9 7-9 7z" fill="currentColor" />
                <path d="M10 5l9 7-9 7z" fill="currentColor" />
            </svg>
        </div>
    );
}

function PlayPauseIcon({ className }: { className: string }) {
    return (
        <div className={className}>
            <svg viewBox="0 0 24 24" className="size-4" aria-hidden>
                {/* Play */}
                <path d="M4 4v16l9-8z" fill="currentColor" />

                {/* Pause */}
                <path
                    d="M16 4v16M20 4v16"
                    stroke="currentColor"
                    strokeWidth="2"
                />
            </svg>
        </div>
    );
}

export default function Clickwheel({
    itemLength,
    setSelected,
    onSelect,
    onMenu,
}: ClickwheelProps) {
    const { onPointerDown, onPointerMove, onPointerUp } = useClickwheel(
        (direction) => {
            setSelected((current) => {
                const next = current + direction;

                if (itemLength === 0) return 0;
                if (next < 0) return itemLength - 1;
                if (next >= itemLength) return 0;

                return next;
            });
        },
    );

    function onPrevious(): void {
        throw new Error("Function not implemented.");
    }

    function onNext(): void {
        throw new Error("Function not implemented.");
    }

    function onPlayPause(): void {
        throw new Error("Function not implemented.");
    }

    return (
        <div className=" w-full, h-full">
            <div
                className="relative size-64 rounded-full bg-zinc-600 touch-none"
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
            >
                <span
                    className="absolute top-7 left-1/2 -translate-x-1/2 text-xs font-bold text-white"
                    onClick={onMenu}
                >
                    MENU
                </span>

                <RewindIcon className="absolute left-7 top-1/2 -translate-y-1/2 size-4 text-white" />

                <FastForwardIcon className="absolute right-7 top-1/2 -translate-y-1/2 size-4 text-white" />

                <PlayPauseIcon className="absolute bottom-7 left-1/2 -translate-x-1/2 size-4 text-white" />

                {/* SELECT */}
                <button
                    className="
            absolute
            left-1/2 top-1/2
            -translate-x-1/2 -translate-y-1/2
            size-23
            rounded-full
            bg-linear-to-b
            from-zinc-300
            via-zinc-500
            to-zinc-300
        "
                    onClick={onSelect}
                />
            </div>
        </div>
    );
}
