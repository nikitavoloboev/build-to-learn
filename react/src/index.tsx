import * as React from "react";
import * as ReactDOM from "react-dom";

function Test() {
  return <div />;
}

const App = () => <Test />;

ReactDOM.render(<App />, document.getElementById("root"));
