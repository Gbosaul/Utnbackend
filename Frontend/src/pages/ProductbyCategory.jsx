import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CardProducto } from '../components/Card.jsx'; 

export const ProductosPorCategoria = () => {
  
  const { categoryId } = useParams();
  
  
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFiltrados = async () => {
      try {
        setCargando(true);
        setError(null);

        const response = await fetch(`http://localhost:3000/api/product/category/${categoryId}`);
        
        if (!response.ok) {
          throw new Error("No se pudo obtener los productos de esta categoría");
        }

        const data = await response.json();
        
        setProductos(data);
      } catch (error) {
        console.error("Error en el fetch:", error);
        setError(error.message);
      } finally {
        setCargando(false);
      }
    };

    if (categoryId) {
      fetchFiltrados();
    }
  }, [categoryId]);

  if (cargando) return <div style={{ padding: '20px' }}>Cargando catálogo...</div>;
  if (error) return <div style={{ color: 'red', padding: '20px' }}>Error: {error}</div>;

  return (
    <div className="page">
    <div style={{ padding: '20px' }}>
      <h2 style={{ marginBottom: '20px', textTransform: 'uppercase' }}>
        {productos.length > 0 ? productos[0].category?.name : "Categoría vacía"}
      </h2>

      <div className="productos-grid" style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '20px',
        justifyContent: 'flex-start' 
      }}>
        {productos.length > 0 ? (
          productos.map((p) => (
            <CardProducto 
              key={p._id} 
              nombre={p.name}
              precio={p.price} 
              descripcion={p.description}
              variantes={p.variants || []}
              imagen={p.image || p.variants?.[0]?.image} 
            />
          ))
        ) : (
          <div style={{ textAlign: 'center', width: '100%', marginTop: '50px' }}>
            <p>Todavía no hay productos cargados en esta sección.</p>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};