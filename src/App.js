import Home from "./js/page/Home";
import Study from "./js/page/Study";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path= "/" element = {<Home />} />
        <Route path="/study" element = {<Study />} />
      </Routes>
      
    </div>
  );
}

export default App;
