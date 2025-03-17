import { ReactNode } from "react"

type Props = {
    children: ReactNode
    color: "main" | "green" | "red"
}
export const Button = ({ children, color }: Props) => {
    const colorClass = color == 'green' 
    ? 'btn-green' 
    : color == "red" 
    ? "btn-red" 
    : "btn-black";

    return (
        <button className={`${colorClass} rounded-[10px]  border-[2px] px-[15px] py-[10px]`}>
            {children}
        </button>
    )
}
