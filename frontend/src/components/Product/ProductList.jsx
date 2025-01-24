import React from 'react';
import { useState, useEffect } from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import CreateProductForm from './CreateProductForm';
import EditProductForm from './EditProductForm';
import DeleteProductForm from './DeleteProductForm';
import Modal from '../Modal';

import { createProduct, updateProduct, deleteProduct } from '../../services/productService'

const ProductList = ({ products }) => {

  const [modalType, setModalType] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);


  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  useEffect(() => {
    console.log(selectedProduct)
  }, [selectedProduct])

  const openCreateModal = () => {
    setModalType('create');
    setIsModalOpen(true);
  };

  const openEditModal = (product) => {
    console.log('info edit', product)
    setModalType('edit');
    setIsModalOpen(true);
  };

  const openDeleteModal = (product) => {
    setModalType('delete');
    setIsModalOpen(true);
  };

  const handleCreateProduct = (newProduct) => {
    // Lógica para crear producto
    createProduct(newProduct)
    console.log('Creating product:', newProduct);
  };

  const handleEditProduct = (updatedProduct) => {
    // Lógica para editar producto
    updateProduct(selectedProduct.id,updatedProduct)
    console.log('Editing product:', updatedProduct);
  };

  const handleDeleteProduct = (productId) => {
    // Lógica para eliminar producto
    deleteProduct(selectedProduct.id)
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
      <h2 className='text-3xl text-cuarto-medio font-poppins mb-3'>Lista de Productos</h2>
      <div className='flex flex-row justify-between '>
        <div className='w-1/4 flex flex-row items-center pr-3 bg-cuarto-oscuro border text-cuarto-claro border-cuarto-semi rounded overflow-hidden'>

          <input type="text"
            placeholder='Buscar por Nombre Id o SKU'
            className='bg-transparent w-full p-1 px-3 outline-none'
          />
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className='flex flex-row gap-2  '>
          <button
            onClick={openCreateModal}
            className='bg-segundo text-cuarto-claro px-3 rounded-lg border-[1px] border-cuarto-medio font-semibold hover:bg-segundo-claro hover:text-cuarto-claro transition-colors duration-300'>
            + Crear producto
          </button>
          <button
            onClick={openEditModal}
            className='bg-cuarto-oscuro text-cuarto-medio px-3 rounded-lg border-[1px] border-cuarto-medio font-semibold hover:bg-segundo hover:text-cuarto-claro transition-colors duration-300'>
            Editar Producto
          </button>
          <button
            onClick={openDeleteModal}
            className='bg-cuarto-oscuro text-cuarto-medio px-3 rounded-lg border-[1px] border-cuarto-medio font-semibold hover:bg-segundo hover:text-cuarto-claro transition-colors duration-300'>
            Eliminar Producto
          </button>
        </div>
      </div>
      <div className='bg-primero-claro rounded-lg w-full px-3 mt-2'>
        <h2 className=' text-cuarto-medio text-lg font-semibold w-full border-b '>Producto seleccionado</h2>
        {selectedProduct != null ? (
          <div className='text-cuarto-medio  border-cuarto-medio cursor-pointer hover:bg-cuarto-oscuro flex flex-row justify-between'>

            <div className='p-2 w-1/6 text-center'>{selectedProduct.id}</div>
            <div className='p-2 w-1/4 text-left'>{selectedProduct.name}</div>
            <div className='p-2 w-1/4 text-left'>{selectedProduct.description}</div>
            <div className='p-2 w-1/6 text-center'>$ {selectedProduct.price}</div>
            <div className='p-2 w-1/6 text-center'>{selectedProduct.stock}</div>
          </div>) : (
          <p className='w-full text-center p-2 text-cuarto-medio'>No se ha seleccionado un producto aún</p>
        )}

      </div>
      <div className='border-[1px] my-2  border-cuarto-medio overflow-hidden rounded-lg'>
        <table className='mx-auto  w-full font-inter'>
          <thead>
            <tr className='text-cuarto p-5 border-b-[1px] bg-cuarto-oscuro border-cuarto-medio'>
              <th className='p-2 w-1/6 text-left'>ID</th>
              <th className='p-2 w-1/4 text-left'>Nombre</th>
              <th className='p-2 w-1/4 text-left'>Descripción</th>
              <th className='p-2 w-1/6 text-center'>Precio Unitario</th>
              <th className='p-2 w-1/6 text-center'>Cantidad en Stock</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id} onClick={() => { setSelectedProduct(product) }} className='text-cuarto-medio border-b-[1px] border-cuarto-medio cursor-pointer hover:bg-cuarto-oscuro'>
                <td className='p-2'>{product.id}</td>
                <td className='p-2'>{product.name}</td>
                <td className='p-2'>{product.description}</td>
                <td className='p-2 text-center'>$ {product.price}</td>
                <td className='p-2 text-center'> {product.stock}</td>
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
