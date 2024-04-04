import { Route, Routes } from "react-router-dom";
// import Home from "../../page/home/Home";
import Register from "../../page/register/Register";

const Rutas = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default Rutas;
