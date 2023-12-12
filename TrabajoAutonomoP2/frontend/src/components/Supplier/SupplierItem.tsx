import React from "react";
import { Supplier } from "./Supplier";
import "./ItemItem.css";
import { useNavigate } from "react-router-dom";
import * as supplierService from "./SupplierService";

interface Props {
  supplier: Supplier;
  loadSuppliers: () => void;
}

const SupplierItem = ({ supplier, loadSuppliers }: Props) => {
  const navigate = useNavigate();

  const handledelete = async (id: string) => {
    await supplierService.deleteSupplier(id);
    loadSuppliers();
  };

  return (
    <div className="col-md-5">
      <div className="card card-body item-card" style={{ cursor: "pointer" }}>
        <div className="d-flex justify-content-between">
          <h2 onClick={() => navigate(`/update-supplier/${supplier.id}`)}>
            {supplier.name}
          </h2>
          <span
            className="text-danger"
            onClick={() => supplier.id && handledelete(supplier.id)}
          >
            x
          </span>
        </div>
        <p>{supplier.status}</p>
      </div>
    </div>
  );
};

export default SupplierItem;
