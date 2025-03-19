
import { TodoCard } from '../TodoCard/TodoCard'
import { useAppDispatch, useAppSelector } from '@/app/store/store'
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent } from '@dnd-kit/core';
import { SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { reorderTodos } from '../../model/todoSlice';
import { SortableItem } from './SortableItem';

export const TodoList = () => {
    const dispatch = useAppDispatch()
    const activeFilter = useAppSelector(state => state.filters.filters.find(el => el.active == "active"))
    const allTodos = useAppSelector(state => state.todos.todos)
    const todos = allTodos.filter(el => {
        if (activeFilter?.status == "all") {
            return true
        } else {
            return el.status == activeFilter?.status
        }
    })

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (active.id !== over?.id) {
            const oldIndex = todos.findIndex(todo => todo.id === active.id);
            const newIndex = todos.findIndex(todo => todo.id === over?.id);

            dispatch(
                reorderTodos({
                    startIndex: oldIndex,
                    endIndex: newIndex,
                })
            );
        }
    };
    return (

        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={todos} strategy={verticalListSortingStrategy}>
                {todos.map(el =>
                    <SortableItem key={el.id} id={el.id}>
                        <TodoCard  {...el} />
                    </SortableItem>

                )}
            </SortableContext>
        </DndContext>
    )
}


