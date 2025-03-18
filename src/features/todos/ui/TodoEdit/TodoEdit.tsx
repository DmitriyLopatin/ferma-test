import { useAppDispatch, useAppSelector } from '@/app/store/store'
import { Button } from '@/shared/ui/Button/Button'
import { Modal } from '@/shared/ui/Modal/Modal'
import React from 'react'
import { editTodo, Todo } from '../../model/todoSlice'
import { closeModal } from '@/features/modal/model/modalSlice'



export const TodoEdit = (todo: Todo) => {

  const [text, setText] = React.useState(todo.todoText)
  const dispatch = useAppDispatch()
  const isModalOpen = useAppSelector(state => state.modal.isOpen)

  const saveTodo = () => {
    dispatch(editTodo({ id: todo.id, text: text }))
    dispatch(dispatch(closeModal()))
  }

  console.log(todo.todoText)
  return (
    <Modal isOpen={isModalOpen} onClose={() => dispatch(closeModal())}>
      <div className="todo-card py-[20px] select-none w-[70%] max-w-[700px]">
        <p className="text-[20px] font-bold mt-2">Сегодня</p>
        <div className="my-5">
          <input type='text' placeholder='Создать задачу' className="min-w-[70%] underline underline-offset-[4px] text-[20px]" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className="flex gap-5 items-center justify-end mb-2">
          <Button
            color="green"
            action={saveTodo}
          >
            Сохранить
          </Button>
          <Button color="red" action={() => dispatch(dispatch(closeModal()))}>
            Закрыть
          </Button>
        </div>
      </div>
    </Modal>
  )
}
