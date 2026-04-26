import React from "react";
import { CardProducto } from "../components/Card";
import { Carrousel } from "../components/Carrousel";
import { useEffect, useState } from 'react';

function Home() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/product');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => { fetchProducts(); }, []);
  return (
    <div id="home">
      <Carrousel
      img1="/assets/ropa.jpg"
      img2="/assets/ropa.jpg"
      img3="/assets/ropa.jpg"
      descripcion1="des1"
      descripcion2="des2"
      descripcion3="des2"
      titulo1="t1"
      titulo2="t2"
      titulo3="t3"
      link1="t3"
      link2="t3"
      link3="t3"
      />
      <article>
      <h1>Nuestros ultimos lanzamientos</h1>
      <div className="card-wrapper">
      <div className="productos-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {products.map((prod) => (
        <CardProducto 
          key={prod._id}
          nombre={prod.name}
          descripcion={prod.description}
          precio={prod.finalPrice} 
          imagen={prod.image}
          variantes={prod.variants}
        />
      ))}
    </div>
      </div>
      </article>
    </div>
  );
}

export default Home;
