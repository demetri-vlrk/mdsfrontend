import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { SignUp } from "./pages/SignUp";
import { Home } from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
