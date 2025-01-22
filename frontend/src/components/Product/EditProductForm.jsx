import React from "react";
import { useState } from "react";

const EditProductForm = ({ product, onSubmit, onClose }) => {
    const [formData, setFormData] = useState({ ...product });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData); // Llama la función de edición
        onClose(); // Cierra el modal
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Mismo contenido que CreateProductForm */}
        </form>
    );
};

export default EditProductForm;
