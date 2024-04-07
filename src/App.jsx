// import { useState } from "react";
import {RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/router";

function App() {
  // const [count, setCount] = useState(0);

  return (
    // <BrowserRouter>{router}</BrowserRouter>
    <>
      {/* {router} */}
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
