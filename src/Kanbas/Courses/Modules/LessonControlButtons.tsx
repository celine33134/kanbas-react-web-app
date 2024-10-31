// Each module title and lesson has a set of control
// buttons at the right end of the title as shown here on the right.
// Let's implement each set of control buttons as separate component.
// Let's start with the LessonControlButtons with the GreenCheckmark plus a vertical
// ellipsis as shown below. Using the component below as an example,
// implement ModuleControlButtons with an additional BsPlus icon.

    import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
export default function LessonControlButtons() {
    return (
        <div className="float-end">
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );}

