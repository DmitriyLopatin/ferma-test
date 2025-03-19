import { useAppDispatch } from '@/app/store/store'
import Add from '@/shared/assets/icons/Add'
import React from 'react'
import { addTodo } from '../../model/todoSlice'
import { ButtonIcon } from '@/shared/ui/Button/ButtonIcon'
import AddSmall from '@/shared/assets/icons/Addsmall'


export const TodoAdd = () => {
  const [text, setText] = React.useState("")
  const dispatch = useAppDispatch()

  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleClick = () => {
    if (text.length > 0) {
      dispatch(addTodo(text))
      setText('')
    }
  }

  return (
    <div className='todo-card flex justify-between items-center'>
      <input type='text' placeholder='Создать задачу' value={text} className="w-[70%] text-[16px] md:text-[20px]" onChange={handlechange} />
      <ButtonIcon action={handleClick} className={'hidden md:inline-block'}>
        {Add()}
      </ButtonIcon>
      <ButtonIcon action={handleClick} className={'md:hidden'}>
        {AddSmall()}
      </ButtonIcon>
    </div>
  )
}

