import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import './App.css';   

const PRODUCTS = [
  { id: 1, name: 'iPhone 15', category: 'Electronics', price: 999 },
  { id: 2, name: 'Coffee Maker', category: 'Home', price: 80 },
  { id: 3, name: 'Running Shoes', category: 'Sportswear', price: 120 },
  { id: 4, name: 'MacBook Pro', category: 'Electronics', price: 1999 },
  { id: 5, name: 'Office Chair', category: 'Furniture', price: 250 },
];

const CATEGORIES = ['All', 'Electronics', 'Home', 'Sportswear', 'Furniture'];

export default function ProductSearch() {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchTerm = searchParams.get('search') || '';
  const category = searchParams.get('category') || 'All';
  const minPrice = parseInt(searchParams.get('minPrice') || '0');
  const maxPrice = parseInt(searchParams.get('maxPrice') || '9999');

  const handleChange = (e) => {
    const form = e.target.form;
    const params = {
      search: form.search.value,
      category: form.category.value,
      minPrice: form.minPrice.value,
      maxPrice: form.maxPrice.value,
    };
    setSearchParams(params);
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = category === 'All' || product.category === category;
      const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchTerm, category, minPrice, maxPrice]);

  return (
    <div className="product-container">
      <h1 className="product-title">Product Search</h1>
      <form className="product-form">
        <input
          type="text"
          name="search"
          placeholder="Search products"
          defaultValue={searchTerm}
          onChange={handleChange}
        />
        <select name="category" defaultValue={category} onChange={handleChange}>
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          defaultValue={minPrice}
          onChange={handleChange}
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          defaultValue={maxPrice}
          onChange={handleChange}
        />
      </form>

      <div className="product-list">
        {filteredProducts.length === 0 ? (
          <p className="no-results">No products found.</p>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <p>{product.category} - ₹{product.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
