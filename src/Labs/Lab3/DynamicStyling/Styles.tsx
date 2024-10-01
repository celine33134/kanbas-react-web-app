// The Styles component declares constant JSON objects that
// can be applied to elements using the styles attribute.
// Alternatively, the styles attribute accepts a JSON literal
// object instance which results in a weird syntax of double curly brackets.

export default function Styles() {
    const colorBlack = { color: "black" };
    const padding10px = { padding: "10px" };
    const bgBlue = { "backgroundColor": "lightblue",
        "color": "black",   ...padding10px
    };
    const bgRed = {
        "backgroundColor": "lightcoral",
        ...colorBlack,   ...padding10px
    };
    return(
        <div id="wd-styles">
            <h2>Styles</h2>
            <div style={{"backgroundColor": "lightyellow",
                "color": "black", padding: "10px" }}>
                Yellow background</div>
            <div style={ bgRed }> Red background </div>
            <div style={ bgBlue }>Blue background</div>
        </div>
    );};
