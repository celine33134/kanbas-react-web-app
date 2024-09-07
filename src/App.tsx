// export default App;

// The App component is the root component that imports other components
// to break up the HTML rendering task amongst a hierarchy of components

// For how we are just rendering the Labs component,
// which for now it's rendering just the Lab1 component

import React from "react";
// @ts-ignore
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
export default function App() {
  return (
      // The HashRouter tag sets up the base mechanism to
      // navigate between multiple screens.
    <HashRouter>
        {/*The example below declares a Route that will display the Labs component o
        nly if the URL in the browser matches the /Labs/* pattern declared in the path attribute.*/}
        <Routes>
            <Route path="/" element={<Navigate to="Labs" />} />
            <Route path="/Labs/*" element={<Labs />} />
            <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
    </HashRouter>
  );
}


