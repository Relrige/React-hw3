import "./App.css";
import { Counter } from "./components/Counter";
import { TASK_API } from "./components/TASK_API";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from "./components/menu";
import { About } from "./components/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Menu />
        </header>

        <Routes>
          <Route path="/" element={<About />} />
          <Route path="tasks_api" element={<TASK_API />} />
          <Route path="counter" element={<Counter />} />
          <Route path="*" element={<h1>Page Not Found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
