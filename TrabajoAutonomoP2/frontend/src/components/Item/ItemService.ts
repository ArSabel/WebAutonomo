import axios from "axios";
import { Item } from "./Item";

const API = "http://localhost:4000/api";

export const getItems = async () => {
  return await axios.get<Item[]>(`${API}/item`);
};

export const createItem = async (item: Item) => {
  return await axios.post(`${API}/item`, item);
};

export const getItem = async (id: string) => {
  return await axios.get<Item>(`${API}/item/${id}`);
};

export const updateItem = async (id: string, item: Item) => {
  return await axios.put<Item>(`${API}/item/${id}`, item);
};

export const deleteItem = async (id: string) => {
  return await axios.delete<Item>(`${API}/item/${id}`);
};
