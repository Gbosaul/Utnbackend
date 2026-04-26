import { useState } from 'react';

export const CardProducto = ({ nombre, precio, variantes, descripcion }) => {
  const [imagenActual, setImagenActual] = useState(variantes[0]?.image);
  const precioMostrar = precio?.$numberDecimal ? precio.$numberDecimal : precio;

  return (
    <div className="cardd">
      <a href="#">
        <img src={imagenActual} alt={nombre} />
      </a>
      
      <div className="card-info">
        <h2>{nombre}</h2>
        <p className="price">${precioMostrar}</p>
        <div className="description-container">
          <p>{descripcion}</p>
          
          <div className="colors-wrapper">
            {variantes && variantes.map((v) => (
              <span 
                key={v._id}
                className="color-circle" 
                style={{ backgroundColor: v.color?.hexCode || '#ccc' }}
                onClick={() => v.image && setImagenActual(v.image)}
                title={v.color?.name}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};