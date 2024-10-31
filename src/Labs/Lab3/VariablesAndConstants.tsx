// Variables can store state information about applications.
// To practice declaring variables and constants,
// create the VariablesAndConstants component below and import it from the Lab3 component.

export default function VariablesAndConstants() {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    return(
        <div id="wd-variables-and-constants">
            <h4>Variables and Constants</h4>
            functionScoped = { functionScoped }<br/>
            blockScoped = { blockScoped }<br/>
            constant1 = { constant1 }<hr/>
        </div>
    );}

