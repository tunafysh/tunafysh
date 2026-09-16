"use client";
import Clickwheel from "@/components/mobile/clickwheel";
import Screen from "@/components/mobile/screen";
import { useState, type ComponentProps } from "react";
import { menu } from "./menu";
import type { MenuItem } from "@/lib/types";

export default function Mobile() {
    const [selected, setSelected] = useState(0);
    const [items, setItems] = useState<MenuItem>(menu);
    const [history, setHistory] = useState<MenuItem[]>([]);

	const currentMenu = items.page?.menu ?? items.children ?? [];
	const itemLength = currentMenu.length;
    const onSelect = () => {
        const currentMenu = items.page?.menu ?? items.children;

        if (!currentMenu) {
            return;
        }

        const selectedItem = currentMenu[selected];

        if (!selectedItem) {
            return;
        }

        if (selectedItem.action) {
            selectedItem.action();
            return;
        }

        setHistory((current) => [...current, items]);
        setItems(selectedItem);
        setSelected(0);
    };

    const onMenu = () => {
        setHistory((current) => {
            if (current.length === 0) {
                return current;
            }

            const previous = current[current.length - 1];

            setItems(previous);
            setSelected(0);

            return current.slice(0, -1);
        });
    };

    return (
        <div
            className="
            min-h-screen
            w-screen
            flex
            flex-col
			landscape:flex-row
            items-center
            justify-center
            gap-10
            bg-linear-to-b from-zinc-100 via-zinc-400 to-zinc-200
            p-6
			landscape:p-8
        "
        >
            <Screen menu={items} selected={selected} />

            <Clickwheel
                itemLength={itemLength}
                setSelected={setSelected}
                onSelect={onSelect}
                onMenu={onMenu}
            />
        </div>
    );
}
