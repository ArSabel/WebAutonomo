import React from "react";
import { Item } from "./Item";
import "./ItemItem.css";
import { useNavigate } from "react-router-dom";
import * as itemService from "./ItemService";

interface Props {
  item: Item;
  loadItems: () => void;
}

const ItemItem = ({ item, loadItems }: Props) => {
  const navigate = useNavigate();

  const handledelete = async (id: string) => {
    await itemService.deleteItem(id);
    loadItems();
  };

  return (
    <div className="col-md-5">
      <div className="card card-body item-card" style={{ cursor: "pointer" }}>
        <div className="d-flex justify-content-between">
          <h2 onClick={() => navigate(`/update-item/${item.id}`)}>
            {item.name}
          </h2>
          <span
            className="text-danger"
            onClick={() => item.id && handledelete(item.id)}
          >
            x
          </span>
        </div>
        <p>{item.description}</p>
        <h5>{item.price}</h5>
      </div>
    </div>
  );
};

export default ItemItem;
