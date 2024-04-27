import { useState } from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="w-full h-screen text-white bg-blue-800 p-6">usama</h1>
      {/* <Header /> */}
      <Home />
    </>
  );
}

export default App;
