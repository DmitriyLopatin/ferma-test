import { KeyboardEvent, ReactNode } from 'react';

type Props = {
    children: ReactNode
    action: () => void
    className: string
}
export const ButtonIcon = ({ children, action, className }: Props) => {

    const keyDownHandler = (event: KeyboardEvent <HTMLButtonElement>)=>{
        
        event?.currentTarget?.blur()

        if (event.key === 'Enter') {
            event.preventDefault()
            action()
          }
    }
    return (
        <button
            onKeyDown={keyDownHandler}
            onMouseDown={e => e.preventDefault()}
            onClick={action}
            className={`${className} rounded-[10px]  focus:bg-[#ffe09d]`}
        >
            {children}
        </button>
    )
}
