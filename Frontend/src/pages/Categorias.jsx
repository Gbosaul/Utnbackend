import { useEffect, useState } from 'react';
import { CardCategoria } from '../components/CardCategoria'; 

const CategoriasPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/category');
      const data = await response.json();
      setCategories(data);
      setLoading(false);
    } catch (error) {
      console.error("Error cargando categorías:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  if (loading) return <p>Cargando categorías...</p>;

  return (
    <div className="page">
      <article>
    <div className="categorias-container">
      <h1>Nuestras Categorías</h1>
      <div className="grid-categorias" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {categories.map((cat) => (
          <CardCategoria 
            key={cat._id} 
            id={cat._id}
            titulo={cat.name} 
            descripcion={`${cat.description}`}
            img="/assets/ropa.jpg" 
          />
        ))}
      </div>
    </div>
    </article>
    </div>
  );
};


export default CategoriasPage