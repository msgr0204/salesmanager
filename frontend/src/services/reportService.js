// src/services/reportService.js
import axios from 'axios';

const API_URL = 'http://localhost:8081/api/reports/daily'; // Cambia el puerto si es necesario

// Función para obtener el reporte diario
export const getDailyReport = async (date) => {
    try {
        const response = await axios.get(`${API_URL}/${date}`);
        return response.data; // El reporte devuelto por el backend
    } catch (error) {
        console.error("Error al obtener el reporte diario:", error);
        throw error; // Lanzar el error para ser manejado en el componente
    }
};

// Función para exportar el reporte a CSV
export const exportReportToCSV = async (date) => {
    try {
        const response = await axios.get(`${API_URL}/${date}/export/csv`);
        return response.data; // Mensaje de éxito o error
    } catch (error) {
        console.error("Error al exportar el reporte a CSV:", error);
        throw error;
    }
};

// Función para exportar el reporte a PDF
export const exportReportToPDF = async (date) => {
    try {
        const response = await axios.get(`${API_URL}/${date}/export/pdf`);
        return response.data; // Mensaje de éxito o error
    } catch (error) {
        console.error("Error al exportar el reporte a PDF:", error);
        throw error;
    }
};
