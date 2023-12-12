import React, { useEffect, useState } from "react";
import { Item } from "./Item";
import * as itemService from "./ItemService";
import ItemItem from "./ItemItem";

export const ItemList = () => {
  const [items, setItems] = useState<Item[]>([]);

  const loadItems = async () => {
    const res = await itemService.getItems();
    setItems(res.data);
  };

  useEffect(() => {
    loadItems();
  }, []);

  return (
    <div className="row">
      {items.map((item) => {
        return <ItemItem key={item.id} item={item} loadItems={loadItems}/>;
      })}
    </div>
  );
};
