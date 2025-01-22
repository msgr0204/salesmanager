const DeleteProductForm = ({ product, onSubmit, onClose }) => {
    const handleDelete = () => {
      onSubmit(product.id); // Llama la función de eliminación
      onClose(); // Cierra el modal
    };
  
    return (
      <div>
        <p className="text-sm">
          Are you sure you want to delete <strong>{product.name}</strong>?
        </p>
        <div className="flex justify-end mt-4 gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    );
  };
  
  export default DeleteProductForm;
  