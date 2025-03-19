
import { DnD } from '@/shared/assets/icons/DnD';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';


interface SortableItemProps {
    id: number;
    children: React.ReactNode;
}

export const SortableItem: React.FC<SortableItemProps> = ({ id, children }) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div ref={setNodeRef} style={style} className='relative'>
            <div {...attributes} {...listeners} className="absolute top-4 right-6 cursor-grab">
                {DnD()}
            </div>
            {children}
        </div>
    );
};