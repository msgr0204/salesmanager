const DeleteProductForm = ({ product, onSubmit, onClose }) => {
    const handleDelete = () => {
      onSubmit(product.id); // Llama la función de eliminación
      onClose(); // Cierra el modal
    };
  
    return (
      <div>
        <p className="text-base">
          ¿Está seguro de eliminar el producto: <strong>{product.name}</strong>?
        </p>
        <div className="flex justify-end mt-4 gap-2">
          <button
            type="button"
            onClick={onClose}
                    className="px-4 py-2 border rounded hover:bg-cuarto-semi"
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Eliminar
          </button>
        </div>
      </div>
    );
  };
  
  export default DeleteProductForm;
  