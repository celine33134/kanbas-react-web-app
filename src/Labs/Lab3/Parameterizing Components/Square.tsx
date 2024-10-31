// We can implement React components to take content in their body
// and return a new version of that content. The content in the body of
// a React component is passed to the component function as parameter
// called children. For instance, the component below takes a number in
// its body and returns the square of the number.

    import React, { ReactNode } from "react";
export default function Square({ children }: { children: ReactNode }) {
    const num = Number(children);
    return <span id="wd-square">{num * num}</span>;
}

