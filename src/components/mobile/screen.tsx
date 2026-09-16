import { MenuItem } from "@/lib/types";
import Battery from "./battery";
import { ChevronRight } from "lucide-react";

interface ScreenProps {
    menu: MenuItem;
    selected: number;
}

export default function Screen({ menu, selected }: ScreenProps) {
    const menuChildren = menu.children ?? [];
    const pageMenu = menu.page?.menu ?? [];

    return (
        <div
            className="
            w-full
            min-w-70
            aspect-4/3
            overflow-hidden
            border
            border-zinc-500
            bg-[#d8d8d2]
            font-sans
            text-black
            shadow-inner
            font-bold
            "
        >
            {/* Header */}
            <div
                className="
                p-2
                flex
                justify-between
                items-center
                h-7
                border-b
                border-zinc-600
                bg-linear-to-b
                from-zinc-200
                to-zinc-400
                "
            >
                <div className="w-5" />

                <p className="text-center text-sm font-bold">{menu.label}</p>

                <Battery />
            </div>

            {/* Page content */}
            {menu.page && (
                <div className="px-1.5 text-black">{menu.page.content}</div>
            )}

            {/* Menu */}
            <div className="flex flex-col">
                {menuChildren.map((item, index) => (
                    <div
                        key={item.label}
                        className={`
                            h-7
                            px-2
                            flex
                            items-center
                            justify-between
                            text-sm
                            ${
                                index === selected
                                    ? "bg-linear-to-b from-blue-400 to-blue-600 text-white"
                                    : ""
                            }
                        `}
                    >
                        <span>{item.label}</span>

                        {(item.children || item.page) && (
                            <ChevronRight className="size-4" strokeWidth={3} />
                        )}
                    </div>
                ))}

                {/* Page menu */}
                {pageMenu.map((item, index) => (
                    <div
                        key={item.label}
                        className={`
                            h-7
                            px-2
                            flex
                            items-center
                            justify-between
                            text-sm
                            ${
                                index === selected
                                    ? "bg-linear-to-b from-blue-400 to-blue-600 text-white"
                                    : ""
                            }
                        `}
                    >
                        <span>{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
