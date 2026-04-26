import { Link } from "react-router-dom";


export const CardCategoria = ({id, img, titulo, descripcion}) => {

  return (
    <Link to={`/productos/${id}`} className="card-categoria-link" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="cardd categoria">
        
        <div className="img-container">
          <img src={img} alt={titulo} />
        </div>
        
        <div className="card-info">
          <h2>{titulo}</h2>
          <div className="description-container">
            <p>{descripcion}</p>
          </div>
        </div>

      </div>
    </Link>
  );
};
