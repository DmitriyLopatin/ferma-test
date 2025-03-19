import { Delete } from "@/shared/assets/icons/Delete"
import Edit from "@/shared/assets/icons/Edit"
import { deleteTodo, Todo, toggleTodo } from "../../model/todoSlice"
import { useAppDispatch, useAppSelector } from "@/app/store/store"
import { ButtonIcon } from "@/shared/ui/Button/ButtonIcon"
import { TodoEdit } from "../TodoEdit/TodoEdit"
import { openModal } from "@/features/modal/model/modalSlice"


export const TodoCard = (props: Todo) => {

  const dispatch = useAppDispatch()
    const isModalOpen = useAppSelector(state => state.modal.isOpen)

  const handleToggle = () => {
    dispatch(toggleTodo(props.id))
  }

  return (
    <>
      <div className="todo-card py-[20px] select-non">
        <p className="text-[20px] font-bold mt-2">Сегодня</p>
        <div className="flex items-center  py-3 gap-4">
          <input id={`${props.id}`} type="checkbox" className="hidden" onChange={handleToggle} />
          <ButtonIcon action={handleToggle} className={`${props.status ? "btn-done":"btn-active"} min-w-[20px] min-h-[20px] rounded-full`}>
            <></>
          </ButtonIcon>
          <label htmlFor={`${props.id}`}  className={`${props.status ? "line-through" : ""} cursor-pointer`}>{props.todoText}</label>
        </div>
        <div className="flex gap-3 items-center justify-end mb-2">
          <ButtonIcon className="p-1" action={() => dispatch(openModal())}>
            {Edit("text-[#30324B] ")}
          </ButtonIcon>
          <ButtonIcon className="p-1" action={() => dispatch(deleteTodo(props.id))}>
            {Delete("text-[#FF2F2F]")}
          </ButtonIcon>
        </div>
      </div>
      {isModalOpen&&<TodoEdit {...props}/>}
    </>
  )
}
