import "./App.css";
import Sidebar from "./component/Sidebar";
import Hlayout from "./component/Hlayout";
import Modal from "./component/Modal";
import Vlayout from "./component/Vlayout";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
function App() {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/reacttask/") {
      navigate("/Hlayout");
    }
  }, []);
  return (
    <>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route
            path="/Hlayout"
            element={<Hlayout setShowModal={setShowModal} />}
          />
          <Route
            path="/Vlayout"
            element={<Vlayout setShowModal={setShowModal} />}
          />
        </Routes>
      </div>
      <div className={`componets ${showModal ? "show-modal" : ""}`}>
        <Modal setShowModal={setShowModal} />
      </div>
    </>
  );
}
export default App;
