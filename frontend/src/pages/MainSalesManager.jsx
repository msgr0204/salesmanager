import React, { useEffect, useState } from 'react';
import { getProducts, createProduct } from '../services/productService';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ProductList from '../components/Product/ProductList';
import Sales from '../components/Sales/Sales';
import Report from '../components/Report/Report'
import Header from '../components/Header';
import SideBar from '../components/SideBar';

const Inventory = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState('home')

  const navigate = useNavigate()

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

  const handlePageChange = (pageSelected) => {
    setPage(pageSelected)
    navigate(`/${pageSelected}`)

  }
/* 
  const handleProductAdded = async (newProductData) => {
    try {
      const newProduct = await createProduct(newProductData);
      setProducts([...products, newProduct]);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  }; */

  return (
    <div className='bg-primero min-h-screen h-full '>
      <Header />
      <div className='flex flex-row w-full'>
        <SideBar pageSelected={page} handlePageChange={handlePageChange} />
        <Routes>
          <Route path='/inventory' element={<ProductList products={products}  />} />
          <Route path='/sales' element={<Sales products={products}  />} />
          <Route path='/report' element={<Report  />} />
        </Routes>

      </div>
    </div>
  );
};

export default Inventory;
