import React, { useState, useEffect } from 'react';
import { getProducts } from '../../services/productService'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';

const Sales = () => {
  const [products, setProducts] = useState([]);
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


  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };


  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      setCart(cart.filter((item) => item.id !== id));
    } else {
      setCart(
        cart.map((item) => (item.id === id ? { ...item, quantity } : item))
      );
    }
  };

  const processSale = () => {
    console.log('Processing sale:', cart);
    // Aquí puedes conectar con tu backend para procesar la venta
    setCart([]); // Vaciar el carrito después de la venta
  };

  return (
    <div className="w-full p-5">
      <h1 className="text-3xl  font-poppins text-cuarto-medio mb-4">Sales Module</h1>
      <div className="mb-4 flex flex-row items-center pr-3 bg-cuarto-oscuro border text-cuarto-claro border-cuarto rounded overflow-hidden">                  
        <input
          type="text"
          placeholder="Search by ID or SKU"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-transparent w-full p-1 px-3 outline-none"
        />
        <FontAwesomeIcon icon={faSearch} />
      </div>

      {/* Resultados de búsqueda */}
      {filteredProducts.length > 0 && (
        <div className="border rounded p-4 mb-4">
          <h2 className="text-lg font-semibold mb-2">Search Results</h2>
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="flex justify-between items-center border-b py-2"
            >
              <span>{product.name}</span>
              <button
                onClick={() => addToCart(product)}
                className="px-3 py-1 bg-segundo text-cuarto-claro rounded"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="border rounded p-4">
        <h2 className="text-lg font-semibold text-cuarto mb-2">Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b py-2"
              >
                <span>
                  {item.name} (x{item.quantity})
                </span>
                <div>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-2 py-1 bg-gray-300 rounded"
                  >
                    -
                  </button>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 bg-gray-300 rounded ml-2"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
            <button
              onClick={processSale}
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
            >
              Complete Sale
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sales;
