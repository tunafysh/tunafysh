"use client"
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";2
import type { Page } from "@/lib/types";
import { useEffect, useState } from "react";
import { kv } from "@vercel/kv";
import { useDebounce } from "use-debounce";

export default function Page() {

    const [cards, setCards] = useState<Page[]>([])
    const update = useDebounce(cards, 500)

    useEffect(() => {
        kv.set("pages", update)
            .then(() => console.log("Data updated successfully!"))
            .catch((error) => {
                console.error("Error updating data:", error);
            });
    }, [update])

    useEffect(() => {
        kv.get<Page[]>("pages").then((pages) => {
            if (pages) {
                setCards(pages)
            }
            else {
                kv.set("pages", [])
            }
        })

    })

    const updatePage = (index: number, newValue: Page) => {
        const updatedArray = cards.map((item, i) => (i === index ? newValue : item));
        setCards(updatedArray);
    }

    return (  
        <div className="h-screen flex flex-col items-center p-8">
            <h1 className="m-4 text-3xl font-bold">Saltycat control panel</h1>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> 
                {cards.length != 0? cards.map((card: Page) => {
                    return (
                        <div key={card.id} className="rounded-lg shadow-md p-4 border-muted border-1">
                            <h2 className="text-xl font-semibold">{card.name}</h2>
                            <div className="py-4 flex flex-row">
                                <p className="mr-4 font-600">Poison pill</p>
                                <Switch checked={card.poison_pill} onCheckedChange={(e) => {
                                    updatePage((Number(card.id) - 1), { ...card, poison_pill: e });                                }} />
                            </div>
                            <p className="p-2 font-semibold">Script</p>
                            <Input type="text" value={card.script} onChange={(e) => {
                                updatePage((Number(card.id) - 1), { ...card, script: e.target.value });
                            }} />
                            
                        </div>
                    );
                }): <p>No pages</p>}
            </div>
        </div>
    );
}