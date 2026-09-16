export default function Battery() {
    return (
        <div className="flex items-center">
            <div
                className="
                relative
                w-5
                h-2.5
                border
                border-black
                bg-zinc-300
                shadow-[inset_0_1px_1px_white,inset_0_-1px_1px_#555]
            "
            >
                <div
                    className="
                    absolute
                    w-full
                    h-full
                    bg-linear-to-b
                    from-green-400
                    via-green-600
                    to-green-800
                    shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]
                "
                />
            </div>

            <div
                className="
                w-0.5
                h-1.5
                bg-black
            "
            />
        </div>
    );
}
