import axios from "axios";
import { Supplier } from "./Supplier";

const API = "http://localhost:4000/api";

export const getSuppliers = async () => {
  return await axios.get<Supplier[]>(`${API}/supplier`);
};

export const createSupplier = async (supplier: Supplier) => {
  return await axios.post(`${API}/supplier`, supplier);
};

export const getSupplier = async (id: string) => {
  return await axios.get<Supplier>(`${API}/supplier/${id}`);
};

export const updateSupplier = async (id: string, supplier: Supplier) => {
  return await axios.put<Supplier>(`${API}/supplier/${id}`, supplier);
};

export const deleteSupplier = async (id: string) => {
  return await axios.delete<Supplier>(`${API}/supplier/${id}`);
};
