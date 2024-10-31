import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

interface ControlButtonsProps {
    id: string;
    deleteItem: (id: string) => void;
    editItem: (id: string) => void;
}

// export default function ModuleControlButtons({ moduleId, deleteModule, editModule }:
// { moduleId: string; deleteModule: (moduleId: string) => void;  editModule: (moduleId: string) => void }) {
//     return (
//         <div className="float-end">
//             <FaPencil onClick={() => editModule(moduleId)} className="text-primary me-3" />
//             <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteModule(moduleId)}/>
//             <GreenCheckmark />
//             <IoEllipsisVertical className="fs-4" />
//         </div>
//     );}

export default function ControlButtons({ id, deleteItem, editItem }: ControlButtonsProps) {
    return (
        <div className="float-end">
            <FaPencil onClick={() => editItem(id)} className="text-primary me-3" />
            <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteItem(id)} />
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}

