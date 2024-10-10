interface WindowManagerProps {
    children: React.ReactNode
    className?: string
}

export default function WindowManager(props: WindowManagerProps) {
    
    return (
        <div>
            <div className="absolute w-full h-full bg-[rgba(0,0,0,0.2)]"></div>
            {props.children}
        </div>
    )

}