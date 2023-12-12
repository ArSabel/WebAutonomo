import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemList } from "./components/Item/ItemList";
import { ItemForm } from "./components/Item/ItemForm";
import { ToastContainer } from "react-toastify";
import "bootswatch/dist/pulse/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import "./index.css";
import Navbar from "./components/navbar/Navbar";
import { SupplierList } from "./components/Supplier/SupplierList";
import { SupplierForm } from "./components/Supplier/SupplierForm";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <div className="container p-4">
        <Routes>
          <Route path="/" Component={ItemList} />
          <Route path="/new-item" Component={ItemForm} />
          <Route path="/update-item/:id" Component={ItemForm} />
          <Route path="/supplier" Component={SupplierList} />
          <Route path="/new-supplier" Component={SupplierForm} />
          <Route path="/update-supplier/:id" Component={SupplierForm} />
        </Routes>
        <ToastContainer />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
