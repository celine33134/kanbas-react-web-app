// For the DOM to be updated as expected, we need to tell
// React.js that changes to a particular variable is indeed
// relevant to changes in the DOM. To do this, use the useState
// hook to declare the state variable, and update it using the
// mutator function as shown below. Now changes to the state variable
// are represented as changes in the DOM.

    import React, { useState } from "react";
export default function Counter() {
    // let count = 7;
    const [count, setCount] = useState(7);
    console.log(count);
    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={() => setCount(count + 1)}
                    id="wd-counter-up-click">Up</button>
            <button onClick={() => setCount(count - 1)}
                    id="wd-counter-down-click">Down</button>
            <hr/>
        </div>
    );
}
