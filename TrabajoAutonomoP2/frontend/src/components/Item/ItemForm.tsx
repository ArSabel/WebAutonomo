import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Item } from "./Item";
import * as itemService from "./ItemService";
import { toast } from "react-toastify";

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export const ItemForm = () => {
  const navigate = useNavigate();
  const params = useParams();

  const initialState = {
    name: "",
    description: "",
    price: 0,
  };

  const [item, setItem] = useState<Item>(initialState);

  const handleInputChange = (e: InputChange) => {
    const { name, value } = e.target;
    // Parsea a número si el campo es "price"
    const parsedValue = name === "price" ? parseFloat(value) : value;
    setItem({ ...item, [name]: parsedValue });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!params.id) {
      await itemService.createItem(item);
      toast.success("Nuevo Item Agregado");
    }else{
      await itemService.updateItem(params.id,item)
      toast.success("Item actualizado")
    }

    navigate("/");
  };

  const getItem = async (id: string) => {
    const res = await itemService.getItem(id);
    const { name, description, price } = res.data;
    setItem({ name, description, price });
  };

  useEffect(() => {
    if (params.id) getItem(params.id);
  }, []);

  return (
    <div className="row">
      <div className="col-md-4 offset-md-5">
        <div className="card">
          <div className="card-body">
            <h3>Nuevo Item</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre del Item..."
                  className="form-control"
                  onChange={handleInputChange}
                  value={item.name}
                  autoFocus
                />
              </div>
              <div className="form-group">
                <textarea
                  name="description"
                  rows={2}
                  placeholder="Descripción..."
                  className="form-control"
                  onChange={handleInputChange}
                  value={item.description}
                ></textarea>
              </div>
              <div className="form-group">
                <input
                  type="number"
                  name="price"
                  placeholder="Precio..."
                  step="0.01" // Esto permite números decimales
                  className="form-control"
                  onChange={handleInputChange}
                  value={item.price}
                />
              </div>
              {params.id ? (
                <button className="btn btn-primary">Actualizar Item</button>
              ) : (
                <button className="btn btn-primary">Crear Item</button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
