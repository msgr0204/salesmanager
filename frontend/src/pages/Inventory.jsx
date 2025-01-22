import React, { useEffect, useState } from 'react';
import { getProducts, createProduct } from '../services/productService';
import { Route,Routes } from 'react-router-dom';
import ProductList from '../components/Product/ProductList';
import Header from '../components/Header';
import SideBar from '../components/SideBar';

const Inventory = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage]= useState('Home')

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleProductAdded = async (newProductData) => {
    try {
      const newProduct = await createProduct(newProductData);
      setProducts([...products, newProduct]);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className='bg-primero min-h-screen h-full '>
      <Header />
      <div className='flex flex-row w-full'>
        <SideBar />
        <Routes>
          <Route path='/inventory' element={<ProductList products={products} />}/>
        </Routes>
        
      </div>
    </div>
  );
};

export default Inventory;
