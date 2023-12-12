import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Supplier } from "./Supplier";
import * as supplierService from "./SupplierService";
import { toast } from "react-toastify";

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export const SupplierForm = () => {
  const navigate = useNavigate();
  const params = useParams();

  const initialState = {
    name: "",
    status: true,
  };

  const [supplier, setSupplier] = useState<Supplier>(initialState);

  const handleInputChange = (e: InputChange) => {
    const { name, value } = e.target;
    // Parsea a número si el campo es "price"
    const parsedValue =
      name === "status" ? value.toLowerCase() === "true" : value;
    setSupplier({ ...supplier, [name]: parsedValue });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!params.id) {
      await supplierService.createSupplier(supplier);
      toast.success("Nuevo proveedor Agregado");
    } else {
      await supplierService.updateSupplier(params.id, supplier);
      toast.success("Proveedor actualizado");
    }

    navigate("/supplier");
  };

  const getSupplier = async (id: string) => {
    const res = await supplierService.getSupplier(id);
    const { name, status } = res.data;
    setSupplier({ name, status });
  };

  useEffect(() => {
    if (params.id) getSupplier(params.id);
  }, []);

  return (
    <div className="row">
      <div className="col-md-4 offset-md-5">
        <div className="card">
          <div className="card-body">
            <h3>Nuevo Proveedor</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre del Proveedor..."
                  className="form-control"
                  onChange={handleInputChange}
                  value={supplier.name}
                  autoFocus
                />
              </div>
              <div className="form-group">
                <label>
                  <input
                    type="radio"
                    name="status"
                    value="true"
                    checked={supplier.status === true}
                    onChange={handleInputChange}
                  />
                  Activo
                </label>
                <label>
                  <input
                    type="radio"
                    name="status"
                    value="false"
                    checked={supplier.status === false}
                    onChange={handleInputChange}
                  />
                  Inactivo
                </label>
              </div>
              {params.id ? (
                <button className="btn btn-primary">
                  Actualizar Proveedor
                </button>
              ) : (
                <button className="btn btn-primary">Crear Proveedor</button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
