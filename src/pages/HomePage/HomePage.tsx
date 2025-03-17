import { TodoAdd } from "@/features/todos"
import { Button } from "@/shared/ui/Button/Button"


const HomePage = () => {
    return (
        <>
            <h1 className="text-[96px] text-center font-bold">Список дел</h1>
            <div className="flex gap-5">
                <Button color="main">Вcе</Button>
                <Button color="green">Выполнено</Button>
                <Button color="red">Не выполнено</Button>
            </div>
            <TodoAdd/>
        </>
    )
}

export default HomePage