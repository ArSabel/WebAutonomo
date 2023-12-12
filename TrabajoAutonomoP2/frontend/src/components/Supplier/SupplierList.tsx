import React, { useEffect, useState } from "react";
import { Supplier } from "./Supplier";
import * as supplierService from "./SupplierService";
import SupplierItem from "./SupplierItem";

export const SupplierList = () => {
  const [supplier, setSupplier] = useState<Supplier[]>([]);

  const loadSuppliers = async () => {
    const res = await supplierService.getSuppliers();
    setSupplier(res.data);
  };

  useEffect(() => {
    loadSuppliers();
  }, []);

  // Filtrar proveedores con estado true
  const activeSuppliers = supplier.filter((supplier) => supplier.status);

  return (
    <div className="row">
      {activeSuppliers.map((supplier) => {
        return <SupplierItem key={supplier.id} supplier={supplier} loadSuppliers={loadSuppliers}/>;
      })}
    </div>
  );
};
