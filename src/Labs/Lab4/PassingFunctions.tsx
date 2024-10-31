// In JavaScript, functions can be treated as any other constant or variable,
// including passing them as parameters to other functions.
// The example below passes function sayHello to component PassingFunctions.
export default function PassingFunctions(
    { theFunction }: { theFunction: () => void }) {
    return (
        <div>
            <h2>Passing Functions</h2>
            <button onClick={theFunction} className="btn btn-primary">
                Invoke the Function
            </button>
            <hr/>
        </div>
    );}
