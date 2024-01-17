import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material/";

import { Link } from "react-router-dom";
import { useState } from "react";

import watch from "../../assets/iwatch.avif"
import airpods from "../../assets/airpods.jpg"
import Airtag from '../../assets/airtag.webp'
import ipod from '../../assets/ipod.jpeg'
import macbook from '../../assets/mackbook.jpeg'
import iphone13 from '../../assets/iphone13.jpeg'
import iphone14 from '../../assets/iphone14.jpeg'
import iphone15 from '../../assets/iphone15.jpeg'
import laptop from '../../assets/laptop.avif'
import desktop from '../../assets/desktop.jpg'


const  productImages ={
  watch,
  Airtag,
  ipod,
  macbook,
  iphone13,
  iphone14,
  iphone15,
  laptop,
  desktop,
  airpods
};


const productRows = [
  {
    id: 1,
    name: "Apple Airpods",
    img:"airpods",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 2,
    name: "Apple Watch",
    img: "watch",
    stock: 123,
    status: "active",
    price: "$80.00",
  },
  {
    id: 3,
    name: "Apple Airtag",
    img: "Airtag",
    stock: 123,
    status: "active",
    price: "$80.00",
  },
  

  
  
  {
    id: 4,
    name: "Apple Ipod",
    img: "ipod",
    stock: 123,
    status: "active",
    price: "$110.00",
  },
  {
    id: 5,
    name: "Apple Macbook",
    img: "macbook",
    stock: 123,
    status: "active",
    price: "$100.00",
  },
  {
    id: 6,
    name: "Apple Iphone 13Series",
    img: "iphone13",
    stock: 123,
    status: "active",
    price: "$250.00",
  },
  {
    id: 7,
    name: "Apple Iphone 14Series",
    img: "iphone14",
    stock: 123,
    status: "active",
    price: "$320.00",
  },
  {
    id: 8,
    name: "Apple 1Iphone 15Series",
    img: "iphone15",
    stock: 123,
    status: "active",
    price: "$220.00",
  },
  {
    id: 9,
    name: "Apple MacDesktop",
    img: "laptop",
    stock: 123,
    status: "active",
    price: "$180.00",
  },
  {
    id: 10,
    name: "Apple MacLaptop",
    img: "desktop",
    stock: 123,
    status: "active",
    price: "$250.00",
  },
];

export default function ProductList() {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (props) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={productImages[props.row.img]} alt="" />
            {props.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price", 
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (props) => {
        return (
          <div>
            <Link to={"/product/" + props.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(props.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}