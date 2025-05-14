
import React from 'react';
import { useParams } from 'react-router-dom';
import "../App.css";
import "./Home.jsx";

const products = [
  { id: 1, name: 'Apple iPhone 15 Pro', description: 'A premium smartphone featuring a titanium frame, A17 Pro chip, 48MP main camera, and advanced AI-powered photography.' },
  { id: 2, name: 'Sony WH-1000XM5 Headphones', description: 'Industry-leading noise-canceling wireless headphones with 30-hour battery life, superior sound quality, and touch controls.' },
  { id: 3, name: 'Apple MacBook Air M3', description: 'A lightweight, ultra-fast laptop with an M3 chip, Liquid Retina display, and all-day battery life, ideal for students and professionals.' },
  { id: 3, name: 'Samsung Galaxy Watch 6 ', description: 'A smartwatch with advanced health tracking, sleep monitoring, and seamless integration with Android devices.' },
  { id: 3, name: 'Bose SoundLink Flex Bluetooth Speaker', description: 'A portable and waterproof speaker with deep bass, 12-hour battery life, and high-quality sound.' },
  { id: 3, name: 'Kindle Paperwhite (11th Gen) ', description: 'A glare-free e-reader with adjustable warm light, waterproof design, and weeks of battery life for endless reading.' },
  { id: 3, name: 'Dyson V15 Detect Vacuum Cleaner', description: 'A powerful cordless vacuum with laser dust detection, HEPA filtration, and advanced suction technology.' },
  { id: 3, name: 'GoPro Hero 12 Black', description: 'A rugged action camera with 5.3K video recording, HyperSmooth stabilization, and waterproof capabilities' },
  { id: 3, name: 'Logitech MX Master 3S Mouse', description: 'A high-precision ergonomic mouse with ultra-fast scrolling, customizable buttons, and multi-device connectivity.' },
  { id: 3, name: 'Instant Pot Duo 7-in-1', description: 'A versatile pressure cooker that functions as a slow cooker, rice cooker, steamer, sauté pan, yogurt maker, and warmer.' },


];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
