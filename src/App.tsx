import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  

  return (
    <>
      <div>
        <h1>Vite + React</h1>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount((c) => c + 1)}>count is {count}</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={count > 10 ? "text-red-500" : "text-blue-500"}>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
