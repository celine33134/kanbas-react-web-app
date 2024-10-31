// Here's another example that highlights the content in its body
// making the content red on yellow. The example below receives the
// children property as a property and then renders it in the return statement.

import { ReactNode } from "react";
export default function Highlight({ children }: { children: ReactNode }) {
    return (
        <span id="wd-highlight" style={{ backgroundColor: "yellow", color: "red" }}>
      {children}
    </span>
    );
}

