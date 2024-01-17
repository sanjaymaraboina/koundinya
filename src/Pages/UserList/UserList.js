import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./userList.css";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";



import aravind from "..//../assets/aravind.jpg";
import pranay from "../../assets/pranay.jpg";
import saitej from "../../assets/saiteja.jpg";
import praneeth from "../../assets/praneeth.jpg";
import praveen from "../../assets/praveen.jpg";
import sathish from "../../assets/sathish.jpg";
import sultan from "../../assets/sulthan.jpg";
import ganesh from "../../assets/ganesh.jpg";
import karthik from "../../assets/karthik.jpg";
import kareem from "../../assets/kareem.jpg";


const  avatarImages ={
  aravind,
  pranay,
  saitej,
  praneeth,
  praveen,
  sathish,
  sultan,
  ganesh,
  karthik,
  kareem
};

const rows = [
  {
    id: 1,
    user: "Aravind Gujjula",
    avatar: "aravind",
    email: "aravindgujjula49102@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 2,
    user: "Pranay Saruvu",
    avatar: "pranay",
    email: "pranayphilic0469@gmail.com",
    status: "active",
    transaction: "$160.00",
  },
  {
    id: 3,
    user: "Venkata Sai Teja",
    avatar: "saitej",

    email: "saitejasurevenkata@gmail.com",
    status: "active",
    transaction: "$80.00",
  },
  {
    id: 4,
    user: "Chethan Praneeth",
    avatar:"praneeth",

    email: "chethanpraneeth@gmail.com",
    status: "active",
    transaction: "$200.00",
  },
  {
    id: 5,
    user: "Praveen Venkat Raj",
    avatar:"praveen",

    email: "Praveenvenkatraj003@gmail.com",
    status: "active",
    transaction: "$220.00",
  },
  {
    id: 6,
    user: "M Satish",
    avatar:"sathish",

    email: "msatish1695@gmail.com",
    status: "active",
    transaction: "$100.00",
  },
  {
    id: 7,
    user: "Shaik Sultan",
    avatar: "sultan",

    email: "shaiksulthan5455@gmail.com",
    status: "active",
    transaction: "$50.00",
  },
  {
    id: 8,
    user: "Ganesh Reddy ",
    avatar: "ganesh",

    email: "ganeshreddy2963@gmail.com",
    status: "active",
    transaction: "$210.00",
  },
  {
    id: 9,
    user: "Karthik Kota",
    avatar: "karthik",

    email: "Kota.php@gmail.com",
    status: "active",
    transaction: "$190.00",
  },
  {
    id: 10,
    user: "Kareem Shaik",
    avatar: "kareem",
    email: "kareem217careerpedia@gmail.com",
    status: "active",
    transaction: "$240.00",
  },
];

export default function UserList() {
  const [data, setData] = useState(rows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell:(props) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={avatarImages[props.row.avatar]} alt="" />
            {props.row.user}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (props) => {
        return (
          <div >
            <div className="editdelete">
            <Link to="/User1" >
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(props.row.id)}
            />
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="userList">
     <div className="users-user">
     <DataGrid
     rows={data}
     disableSelectionOnClick
     columns={columns}
     checkboxSelection
   />
     
     </div>
    </div>
  );
}
