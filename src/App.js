import Board from "./components/Board";
import React from "react"
import {Routes, Route , useNavigate,BrowserRouter} from "react-router-dom"


function App() {

  return (
    <div className="App">
        <Board />
        {/*<BrowserRouter>*/}
        {/*    <Routes>*/}
        {/*        <Route path="/" element={<Board />} />*/}
        {/*    </Routes>*/}
        {/*</BrowserRouter>*/}
    </div>
  );
}

export default App;
