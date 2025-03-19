import { ReactNode } from "react"

type Props = {
    children?: ReactNode
    color?: "main" | "green" | "red"
    active?: string
    action:()=>void
}
export const Button = ({ children, color, active,  action }: Props) => {


    const colorClass = color == 'green'
        ? `btn-green ${active}`
        : color == "red"
            ? `btn-red ${active}`
            : `btn-black ${active}`;

    return (
        <button
            onClick={action}
            onMouseDown={e => e.preventDefault()}
            className={`${colorClass} rounded-[10px]  border-[2px] px-[15px] py-[10px] text-nowrap`}
        >
            {children}
        </button>
    )
}
