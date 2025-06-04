import "./App.css";
import NavBar from "./components/NavBar";
import TableList from "./components/TableList";
import ModalForm from "./components/ModalForm";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [searchTerm, setSearchTerm] = useState("");
  const [tableData, setTableData] = useState([]);
  const [error, setError] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/clients/search?c=${searchTerm}`
        );
        setTableData(response.data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, [searchTerm, refresh]);

  const handleSubmit = async (clientData) => {
    if (modalMode === "add") {
      try {
        console.log(clientData);
        await axios.post("http://localhost:8000/api/clients", clientData);
        setSearchTerm("");
        setRefresh((r) => !r);
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        await axios.put(
          `http://localhost:8000/api/clients/${modalData.id}`,
          clientData
        );
        setSearchTerm("");
        setRefresh((r) => !r);
      } catch (err) {
        console.log(err);
      }
    }
  };
  const handleOpen = (mode, client = null) => {
    setModalMode(mode);
    setModalData(client);
    setIsOpen(true);
  };

  return (
    <>
      <NavBar onOpen={() => handleOpen("add")} onSearch={setSearchTerm} />
      <TableList
        onOpen={handleOpen}
        tableData={tableData}
        error={error}
        onRefresh={() => setRefresh((r) => !r)}
      />
      <ModalForm
        mode={modalMode}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        setModalData={setModalData}
        modalData={modalData}
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default App;
