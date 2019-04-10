import * as React from "react";
import * as ReactDOM from "react-dom";
import { Test } from "./components/Test";

// TODO: add routing & have /test always be routed so I can experiment on it
const App = () => <Test />;

ReactDOM.render(<App />, document.getElementById("root"));
