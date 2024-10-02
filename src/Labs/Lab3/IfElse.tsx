// The most common use of conditionals is if/else statements
// that evaluate a predicate and can decide to execute one of
// two different code blocks depending on whether the predicate
// evaluates to true or false.

export default function IfElse() {
    let true1 = true, false1 = false;

    return (
        <div id="wd-if-else">
            <h4>If Else</h4>
            {true1 && <p>true1</p>}
            {!false1 ? <p>!false1</p> : <p>false1</p>}
            <hr/>
        </div>
    );
}
