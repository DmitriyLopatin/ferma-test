
import { TodoCard } from '../TodoCard/TodoCard'
import { useAppSelector } from '@/app/store/store'

export const TodoList = () => {
    const activeFilter = useAppSelector(state => state.filters.filters.find(el => el.active == "active"))
    const todos = useAppSelector(state => state.todos.todos.filter(el => {
        if (activeFilter?.status == "all") {
            return el
        }else{
            return el.status == activeFilter?.status
        }
    }))

    return (
        <div>
            {todos.map(el => <TodoCard key={el.id} {...el} />)}
        </div>
    )
}
