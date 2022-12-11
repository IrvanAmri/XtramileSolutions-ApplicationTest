import { Routes, Route, Link } from "react-router-dom";
import AddStudent from "./AddStudent";
import Home from "./Home";

function App() {
  return (
    <main className="App">
      <header>
        <h1>Student List</h1>
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add" element={<AddStudent />}></Route>
      </Routes>
    </main>
  );
}

export default App;
