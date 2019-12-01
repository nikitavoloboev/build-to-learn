import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(json => setData(json))
      .catch(err => console.error(err));
  }, []);

  return <div>{data && JSON.stringify(data)}</div>;
};

export default App;
