// When handing an event, sometimes we need to pass parameters
// to the function handling the event. Make sure to wrap the
// function call in a closure as shown below. The example below
// calls add(2, 3) when the button is clicked, passing arguments a
// and b as 2 and 3. If you do not wrap the function call inside
// a closure, you risk creating an infinite loop.

const add = (a: number, b: number) => {
    alert(`${a} + ${b} = ${a + b}`);
};
export default function PassingDataOnEvent() {
    return (
        <div id="wd-passing-data-on-event">
            <h2>Passing Data on Event</h2>
            <button onClick={() => add(2, 3)}
                // onClick={add(2, 3)}
                    className="btn btn-primary"
                    id="wd-pass-data-click">
                Pass 2 and 3 to add()
            </button>
            <hr/>
        </div>
    );}
