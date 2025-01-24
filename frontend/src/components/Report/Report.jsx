// src/components/ReportPage.js
import React, { useState, useEffect } from 'react';
import { getDailyReport, exportReportToCSV, exportReportToPDF } from '../../services/reportService';

const Report = () => {
    const [report, setReport] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [date, setDate] = useState("2025-01-23"); // Puedes permitir al usuario elegir la fecha

    useEffect(() => {
        // Obtener el reporte al cargar el componente
        const fetchReport = async () => {
            setLoading(true);
            try {
                const data = await getDailyReport(date);
                setReport(data);
            } catch (err) {
                setError('Error al obtener el reporte');
            } finally {
                setLoading(false);
            }
        };

        fetchReport();
    }, [date]);

    const handleExportCSV = async () => {
        try {
            await exportReportToCSV(date);
            alert("Reporte exportado a CSV");
        } catch (err) {
            alert("Error al exportar el reporte a CSV");
        }
    };

    const handleExportPDF = async () => {
        try {
            await exportReportToPDF(date);
            alert("Reporte exportado a PDF");
        } catch (err) {
            alert("Error al exportar el reporte a PDF");
        }
    };

    return (
        <div className="w-full p-5">
            <h1 className="text-3xl  font-poppins text-cuarto-medio mb-4">Reporte Diario</h1>

            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className='bg-cuarto-semi text-cuarto p-1 px-3 rounded-xl'
            />

            {loading && <p>Cargando...</p>}
            {error && <p>{error}</p>}

            {report && (
                <div className='bg-cuarto-semi  rounded-xl p-5 mt-3'>
                    <h2 className='text-cuarto-medio font-semibold text-2xl border-b border-cuarto-medio'>Resumen del Reporte</h2>
                    <p className=' text-left py-3 text-cuarto-medio text-xl font-semibold' >Número de transacciones: {report.transactionCount}</p>
                    <div className='border rounded-lg p-4'>
                        <h3 className='text-cuarto-claro font-semibold text-2xl text-center '>Productos vendidos</h3>
                        <ul>
                            {report.productQuantities.map((product, index) => (
                                <li key={index} className='border-b border-cuarto-medio text-right text-cuarto-medio text-xl'>
                                    {product[0]}: {product[1]} unidades
                                </li>
                            ))}
                        </ul>
                        <p className='text-right text-cuarto-claro font-bold text-xl'>Total de ingresos: $ {report.totalRevenue}</p>
                    </div>

                    <div className='py-3 flex flex-row justify-center'>
                        <button className='border border-cuarto p-2 px-4 rounded-lg mx-1 font-semibold text-cuarto-claro  hover:bg-cuarto-medio text-lg' onClick={handleExportCSV}>Exportar a CSV</button>
                        <button className='bg-segundo p-2 px-4 rounded-lg mx-1 font-semibold text-cuarto-claro  hover:bg-segundo-claro text-lg' onClick={handleExportPDF}>Exportar a PDF</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Report;
