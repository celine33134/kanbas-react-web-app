// State can be shared between components by passing references
// to state variables and/or functions that update them. The example
// below demonstrates a ParentStateComponent sharing counter state
// variable and setCounter mutator function with ChildStateComponent
// by passing it references to counter and setCounter as attributes.

import React, { useState } from "react";
import ChildStateComponent from "./ChildStateComponent";
export default function ParentStateComponent() {
    const [counter, setCounter] = useState(123);
    return (
        <div>
            <h2>Counter {counter}</h2>
            <ChildStateComponent
                counter={counter}
                setCounter={setCounter} />
            <hr/>
        </div>
    );
}

