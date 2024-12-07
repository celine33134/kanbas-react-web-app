// import { IoEllipsisVertical } from "react-icons/io5";
// import GreenCheckmark from "./GreenCheckmark";
// import { FaTrash } from "react-icons/fa";
// import { FaPencil } from "react-icons/fa6";
//
// interface ControlButtonsProps {
//     id: string;
//     deleteItem: (id: string) => void;
//     editItem: (id: string) => void;
// }
//
//
// export default function ControlButtons({ id, deleteItem, editItem }: ControlButtonsProps) {
//     return (
//         <div className="float-end">
//             <FaPencil onClick={() => editItem(id)} className="text-primary me-3" />
//             <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteItem(id)} />
//             <GreenCheckmark />
//             <IoEllipsisVertical className="fs-4" />
//         </div>
//     );
// }

import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

// Define the prop types for ControlButtons
interface ControlButtonsProps {
    id: string;                // The ID of the module
    deleteItem: (id: string) => void; // Function to delete the module
    editItem: (id: string) => void;   // Function to edit the module
}

const ControlButtons: React.FC<ControlButtonsProps> = ({ id, deleteItem, editItem }) => {
    return (
        <div className="float-end">
            {/* Pencil icon to trigger edit action */}
            <FaPencil onClick={() => editItem(id)} className="text-primary me-3" />

            {/* Trash icon to trigger delete action */}
            <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteItem(id)} />

            {/* Green checkmark icon, presumably for marking completion */}
            <GreenCheckmark />

            {/* Ellipsis icon for more options (currently unused) */}
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
};

export default ControlButtons;


