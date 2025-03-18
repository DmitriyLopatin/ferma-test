import { Filters } from "@/features/filter/ui/Filters"
import { TodoAdd, TodoList } from "@/features/todos"
import { Button } from "@/shared/ui/Button/Button"


const HomePage = () => {

    return (
        <>
            <h1 className="text-[96px] text-center font-bold mb-[30px]">Список дел</h1>
            <TodoAdd />
            <Filters />
            <TodoList/>
        </>
    )
}

export default HomePage