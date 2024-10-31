// When an event occurs, JavaScript collects several pieces of
// information about when the event occurred, formats it in an
// event object and passes the object to the event handler function. mThe event object contains information such as a timestamp of when the event occurred, where the mouse was on the screen, and the DOM element responsible for generating the event. The example below declares event handler function handleClick that accepts an event object e parameter, removes the view property and replaces the target property to avoid circular references, and then stores the event object in variable event.

    import React, { useState } from "react";
export default function EventObject() {
    const [event, setEvent] = useState(null);
    const handleClick = (e: any) => {
        e.target = e.target.outerHTML;
        delete e.view;
        setEvent(e);
    };
    return (
        <div>
            <h2>Event Object</h2>
            <button onClick={(e) => handleClick(e)}
                    className="btn btn-primary"
                    id="wd-display-event-obj-click">
                Display Event Object
            </button>
            <pre>{JSON.stringify(event, null, 2)}</pre>
            <hr/>
        </div>
    );}
