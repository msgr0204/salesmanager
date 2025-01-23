import axios from "axios";

// URL base de tu API
const API_URL = "http://localhost:8081/api/sales";


  // Crear una venta con productos
  export const createSale= async (saleRequest) => {
    try {
      const response = await axios.post(API_URL, saleRequest, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data; // Retorna la venta creada
    } catch (error) {
      console.error("Error al crear la venta", error);
      throw error; // Lanza el error para manejarlo en el componente
    }
  }

  // Obtener todas las ventas
  export const getAllSales= async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data; // Retorna la lista de ventas
    } catch (error) {
      console.error("Error al obtener las ventas", error);
      throw error; // Lanza el error para manejarlo en el componente
    }
  }

  // Obtener una venta por ID
  export const getSaleById= async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data; // Retorna la venta encontrada
    } catch (error) {
      console.error(`Error al obtener la venta con ID ${id}`, error);
      throw error; // Lanza el error para manejarlo en el componente
    }
  }

  // Actualizar una venta
  export const updateSale= async (id, saleData) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, saleData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data; // Retorna la venta actualizada
    } catch (error) {
      console.error(`Error al actualizar la venta con ID ${id}`, error);
      throw error; // Lanza el error para manejarlo en el componente
    }
  }

  // Eliminar una venta
  export const deleteSale= async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      return { message: "Venta eliminada con éxito" }; // Mensaje de confirmación
    } catch (error) {
      console.error(`Error al eliminar la venta con ID ${id}`, error);
      throw error; // Lanza el error para manejarlo en el componente
    }
  }


