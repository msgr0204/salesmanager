
import axios from 'axios';

const API_URL = 'http://localhost:8081/api/reports/daily'; 


export const getDailyReport = async (date) => {
    try {
        const response = await axios.get(`${API_URL}/${date}`);
        return response.data; 
    } catch (error) {
        console.error("Error al obtener el reporte diario:", error);
        throw error; 
    }
};


export const exportReportToCSV = async (date) => {
    try {
        const response = await axios.get(`${API_URL}/${date}/export/csv`);
        return response.data; 
    } catch (error) {
        console.error("Error al exportar el reporte a CSV:", error);
        throw error;
    }
};


export const exportReportToPDF = async (date) => {
    try {
        const response = await axios.get(`${API_URL}/${date}/export/pdf`);
        return response.data; 
    } catch (error) {
        console.error("Error al exportar el reporte a PDF:", error);
        throw error;
    }
};
