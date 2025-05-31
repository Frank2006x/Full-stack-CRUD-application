import "./App.css";
import NavBar from "./components/NavBar";
import TableList from "./components/TableList";
import ModalForm from "./components/ModalForm";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  console.log(modalMode)
  const handleSubmit = () => {
    if (modalMode == "add") {
      console.log("add mode");
    } else {
      console.log("edit mode");
    }
  };
  const handleOpen = (mode) => {
    setModalMode(mode);
    setIsOpen(true);
  };

  return (
    <>
      <NavBar onOpen={() => handleOpen("add")} />
      <TableList onOpen={() => handleOpen("edit")} />
      <ModalForm
        mode={modalMode}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default App;
