import React from 'react';
import { useState, useEffect } from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';

import CreateProductForm from './CreateProductForm';
import EditProductForm from './EditProductForm';
import DeleteProductForm from './DeleteProductForm';
import Modal from '../Modal';

const ProductList = ({ products }) => {

  const [modalType, setModalType] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openCreateModal = () => {
    setModalType('create');
    setIsModalOpen(true);
  };

  const openEditModal = (product) => {
    setModalType('edit');
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const openDeleteModal = (product) => {
    setModalType('delete');
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCreateProduct = (newProduct) => {
    // Lógica para crear producto
    console.log('Creating product:', newProduct);
  };

  const handleEditProduct = (updatedProduct) => {
    // Lógica para editar producto
    console.log('Editing product:', updatedProduct);
  };

  const handleDeleteProduct = (productId) => {
    // Lógica para eliminar producto
    console.log('Deleting product with ID:', productId);
  };




  return (
    <div className='w-full p-5'>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {modalType === 'create' && (
          <CreateProductForm onSubmit={handleCreateProduct} onClose={closeModal} />
        )}
        {modalType === 'edit' && selectedProduct && (
          <EditProductForm
            product={selectedProduct}
            onSubmit={handleEditProduct}
            onClose={closeModal}
          />
        )}
        {modalType === 'delete' && selectedProduct && (
          <DeleteProductForm
            product={selectedProduct}
            onSubmit={handleDeleteProduct}
            onClose={closeModal}
          />
        )}
      </Modal>
      <h2 className='text-3xl text-cuarto-medio font-poppins mb-3'>Product List</h2>
      <div className='flex flex-row justify-between '>
        <div className='w-1/4 flex flex-row items-center pr-3 bg-cuarto-oscuro border text-cuarto-claro border-cuarto-semi rounded overflow-hidden'>
         
          <input type="text" 
          placeholder='Search by ID or SKU'
          className='bg-transparent w-full p-1 px-3 outline-none'
          />
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className='flex flex-row gap-2  '>
          <button
            onClick={openCreateModal}
            className='bg-segundo text-cuarto-claro px-3 rounded-lg border-[1px] border-cuarto-medio font-semibold hover:bg-segundo-claro hover:text-cuarto-claro transition-colors duration-300'>
            + Create Product
          </button>
          <button
            onClick={openEditModal}
            className='bg-cuarto-oscuro text-cuarto-medio px-3 rounded-lg border-[1px] border-cuarto-medio font-semibold hover:bg-segundo hover:text-cuarto-claro transition-colors duration-300'>
            Update Product
          </button>
          <button
            onClick={openDeleteModal}
            className='bg-cuarto-oscuro text-cuarto-medio px-3 rounded-lg border-[1px] border-cuarto-medio font-semibold hover:bg-segundo hover:text-cuarto-claro transition-colors duration-300'>
            Delete Product
          </button>
        </div>
      </div>

      <div className='border-[1px] my-2  border-cuarto-medio overflow-hidden rounded-lg'>
        <table className='mx-auto  w-full font-inter'>
          <thead>
            <tr className='text-cuarto p-5 border-b-[1px] bg-cuarto-oscuro border-cuarto-medio'>
              <th className='p-2 w-1/6 text-left'>ID</th>
              <th className='p-2 w-1/4 text-left'>Name</th>
              <th className='p-2 w-1/4 text-left'>Description</th>
              <th className='p-2 w-1/6 text-center'>Unit Price</th>
              <th className='p-2 w-1/6 text-center'>Quantity in Stock</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id} className='text-cuarto-medio border-b-[1px] border-cuarto-medio cursor-pointer hover:bg-cuarto-oscuro'>
                <td className='p-2'>{product.id}</td>
                <td className='p-2'>{product.name}</td>
                <td className='p-2'>{product.description}</td>
                <td className='p-2 text-center'>{product.unitPrice}</td>
                <td className='p-2 text-center'>{product.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {products.length === 0 && (
          <p className='text-cuarto text-center w-full py-5 font-semibold'>No products available.</p>
        )}
      </div>

    </div>
  );
};

export default ProductList;
