import { useState } from "react";

import "./todoList.css";
import { CrudUser } from "../Cruduser/CrudUser";
import { Modal } from "../../Main Components/modal/Modal";

function TodoList() {
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
    {
      id: "1",
      user: "Aravind Gujjala",
      email: "Aravindhgujjala@gmail.com",
      status: "Active",
      transaction:"$210",
      phone:"+91 9856 321 652",
    },
    {
        id: "2",
        user: "Sai Teja ",
        email: "saitejavenkat@gmail.com",
        status: "Active",
        transaction:"$170",
        phone:"+91 9621 321 852",
      },
      {
        id: "3",
        user: "Sathish",
        email: "sathisam452@gmail.com",
        status: "Active",
        transaction:"$110",
        phone:"+91 7706 321 863",
      },
      {
        id: "4",
        user: "Ramesh",
        email: "ramehs44895@gmail.com",
        status: "Active",
        transaction:"$150",
        phone:"+91 7985 781 863",
      },
      {
        id: "5",
        user: "Mahesh",
        email: "MaheshPalle@gmail.com",
        status: "Active",
        transaction:"$510",
        phone:"+91 8806 321 123",
      },
      {
        id: "6",
        user: "Rishikesh",
        email: "Rishikesh@gmail.com",
        status: "Active",
        transaction:"$170",
        phone:"+91 9906 321 222",
      },
      {
        id: "7",
        user: "Harish",
        email: "Harishtottem@gmail.com",
        status: "Active",
        transaction:"$190",
        phone:"+91 6582 321 863",
      },

  ]);
  const [rowToEdit, setRowToEdit] = useState("");

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((element, index1) => index1 !== targetIndex));
  };

  const handleEditRow = (index1) => {
    setRowToEdit(index1);

    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, index1) => {
            if (index1 !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };

  return (
    <div className="Todo">
      <CrudUser rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />

      <button onClick={() => setModalOpen(true)} className="btn">
        Add
      </button>
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
    </div>
  );
}

export default  TodoList;