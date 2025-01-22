import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const getProducts = async () => {
  const response = await axios.get(`${API_URL}/productos`);
  return response.data;
};

export const createProduct = async (product) => {
  const response = await axios.post(`${API_URL}/productos`, product);
  return response.data;
};

export const updateProduct = async (id, updatedProduct) => {
  const response = await axios.put(`${API_URL}/productos/${id}`, updatedProduct);
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await axios.delete(`${API_URL}/productos/${id}`);
  return response.data;
};
