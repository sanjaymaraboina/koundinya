import "./App.css";
import Sidebar from "./Main Components/Sidebar";
import Topbar from "./Main Components/Topbar";
import Home from "./Pages/Home/Home";
import ProductList from "./Pages/productList/ProductList";
import User from "./Pages/user/User";
import Product from "./Pages/product/Product";
import TodoList from "./Pages/TodoList/TodoList";
import UserList from "../src/Pages/UserList/UserList"
import NewUser from "../src/Pages/NewUser/NewUser"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminList from "./Pages/Adminlist/AdminList";
import Dummy from "./Main Components/Dummy";

function App() {
  return (
    <div>
      <Router>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route path="/koundinya" exact Component={Home} />
            <Route path="/Users" Component={UserList} />
            <Route path="/user1" Component={User} />
            <Route path="/newUser" Component={NewUser} />           
            <Route path="/products" Component={ProductList} />
            <Route path="/product/:productId" Component={Product} />
            <Route path="/Admin" Component={AdminList} />
            <Route path="/todo" Component={TodoList} />
            <Route path="/dummy" Component={Dummy} />
            
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
