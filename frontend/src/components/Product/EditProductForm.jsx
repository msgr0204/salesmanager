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
        onSubmit(formData);
        onClose();
    };

    return (
        <form onSubmit={handleSubmit} className=''>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border rounded bg-cuarto-semi placeholder:text-cuarto-medio focus:outline-none focus:ring focus:ring-blue-500"
                    placeholder="Enter product name"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full p-2 border rounded bg-cuarto-semi placeholder:text-cuarto-medio focus:outline-none focus:ring focus:ring-blue-500"
                    placeholder="Enter product description"
                />
            </div>
            <div className="flex gap-4">
                <div className="flex-1">
                    <label className="block text-sm font-medium mb-1">Unit Price</label>
                    <input
                        type="number"
                        name="unitPrice"
                        value={formData.unitPrice}
                        onChange={handleChange}
                        className="w-full p-2 border rounded bg-cuarto-semi placeholder:text-cuarto-medio focus:outline-none focus:ring focus:ring-blue-500"
                        placeholder="Enter price"
                        required
                    />
                </div>
                <div className="flex-1">
                    <label className="block text-sm font-medium mb-1">Stock</label>
                    <input
                        type="number"
                        name="stock"
                        value={formData.stock}
                        onChange={handleChange}
                        className="w-full p-2 border rounded bg-cuarto-semi placeholder:text-cuarto-medio focus:outline-none focus:ring focus:ring-blue-500"
                        placeholder="Enter stock"
                        required
                    />
                </div>
            </div>
            <div className="flex justify-end mt-4 gap-2">
                <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 border rounded hover:bg-cuarto-semi"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="px-4 py-2 bg-segundo text-cuarto-claro rounded hover:bg-segundo-claro"
                >
                    Save
                </button>
            </div>
        </form>
    );
};

export default EditProductForm;
