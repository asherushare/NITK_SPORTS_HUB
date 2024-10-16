import Home from "./pages/home/Home";
// import Register from "./pages/register/Register";
import Contact from "./pages/contactUs/Contact";
import Newcomplex from "./pages/newComplex/Newcomplex";
import Oldcomplex from "./pages/oldComplex/Oldcomplex";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/new-complex" element={<Newcomplex />} />
        <Route path="/old-complex" element={<Oldcomplex />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
