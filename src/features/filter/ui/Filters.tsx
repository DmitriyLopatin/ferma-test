import { useAppDispatch, useAppSelector } from '@/app/store/store'
import { Button } from '@/shared/ui/Button/Button'
import { setFilterActive } from '../model/filterSlice'


export const Filters = () => {
    const filters = useAppSelector(state => state.filters.filters)
    const dispatch = useAppDispatch()

    return (
        <div className="flex gap-5 mt-[50px] mb-[25px]">
            {filters.map(el =>
                <Button
                    color={el.color as "main" | "green" | "red"}
                    key={el.id}
                    active={el.active}
                    action={()=>dispatch(setFilterActive(el.id))}
                >
                    {el.text}
                </Button>
            )}
        </div>
    )
}
