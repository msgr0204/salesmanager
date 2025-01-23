import React, { useState, useEffect } from 'react';
import { getProducts } from '../../services/productService';
import {createSale} from '../../services/saleService'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Sales = () => {
  const [products, setProducts] = useState([]);
  const [totalCart,setTotalCart] =useState(0)
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);

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

  useEffect(() => {
    if (searchTerm) {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.id.toString().includes(searchTerm)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  }, [searchTerm, products]);

  useEffect(() => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalCart(total)
  }, [cart]);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    
    if (existingProduct) {
      if (existingProduct.quantity + 1 > product.stock) {
        alert('No hay suficiente stock para añadir más unidades.');
        return;
      }
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      if (product.stock > 0) {
        setCart([...cart, { ...product, quantity: 1 }]);
      } else {
        alert('Producto fuera de stock');
      }
    }
  };
  
  const updateQuantity = (id, quantity) => {
    const product = cart.find((item) => item.id === id);
    if (!product) return;
  
    if (quantity <= 0) {
      setCart(cart.filter((item) => item.id !== id));
    } else {
      if (quantity > product.stock) {
        alert('No hay suficiente stock para esta cantidad.');
        return;
      }
      setCart(
        cart.map((item) => (item.id === id ? { ...item, quantity } : item))
      );
    }
  };
  

  const processSale = async () => {
    const saleRequest = {
      products: cart.map(item => ({
        productId: item.id,
        quantity: item.quantity,
      })),
      total: totalCart,
      saleDate: new Date().toISOString(),
    };

    try {
      const sale = await createSale(saleRequest); 
      console.log('Processed Sale', sale);
      setCart([]);
      alert("Venta realizada con éxito!");
    } catch (error) {
      console.error('Error at sale processing', error);
      alert('Error al procesar la venta. Intente nuevamente.');
    }
  };

  return (
    <div className="w-full p-5">
      <h1 className="text-3xl  font-poppins text-cuarto-medio mb-4">Modulo de Ventas</h1>
      <div className="mb-4 flex flex-row items-center pr-3 bg-cuarto-oscuro border text-cuarto-claro border-cuarto rounded overflow-hidden">
        <input
          type="text"
          placeholder="Buscar por Nombre Id o SKU"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-transparent w-full p-1 px-3 outline-none"
        />
        <FontAwesomeIcon icon={faSearch} />
      </div>

      {/* Resultados de búsqueda */}
      {filteredProducts.length > 0 && (
        <div className="border rounded p-4 mb-4">
          <h2 className="text-lg font-semibold text-cuarto mb-2">Resultados de la busqueda:</h2>
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="flex justify-between items-center border-b py-2"
            >
              <div className='w-1/3'>
                <span className='text-cuarto-medio'>{product.name}</span>
              </div>
              <div className='w-1/3'>
                <span className='text-cuarto-medio'>{`Precio: $${product.price}`}</span>
              </div>
              <div className='w-1/6'>
                <span className='text-cuarto-medio'>{`Stock: ${product.stock}`}</span>
              </div>

              <button
                onClick={() => addToCart(product)}
                className="px-3 py-1 bg-segundo text-cuarto-claro rounded"
              >
                Añadir al carrito
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="border rounded p-4">
        <h2 className="text-lg font-semibold text-cuarto mb-2">Carrito de compras</h2>
        {cart.length === 0 ? (
          <p className='text-cuarto-medio'>Tu carrito esta vacio.</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b py-2"
              >
                <div className='w-1/3'>
                  <span className='text-cuarto-medio'>{item.name}</span>
                </div>
                <div className='w-1/6'>
                  <span className='text-cuarto-medio'>{`Cantidad: ${item.quantity}`}</span>
                </div>
                <div className='w-1/3'>
                  <span className='text-cuarto-medio'>{`Subtotal: $${item.price * item.quantity}`}</span>
                </div>

                <div className=''>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className=" rounded h-8 aspect-square font-bold text-xl bg-red-500 text-cuarto-claro"
                  >
                    -
                  </button>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className=" rounded ml-2 h-8 aspect-square font-bold text-xl bg-segundo text-cuarto-claro"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
            <div className='flex flex-row justify-between items-center font-bold py-2'>
              <span className='text-cuarto text-xl'>{`Total: $ ${totalCart}`}</span>
              <button
                onClick={processSale}
                className=" px-4 py-2 bg-cuarto-semi font-semibold  hover:bg-segundo text-cuarto-claro transition-colors duration-300 rounded"
              >
                Finalizar Compra
              </button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Sales;
