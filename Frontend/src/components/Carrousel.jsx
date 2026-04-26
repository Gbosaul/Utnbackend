export const Carrousel = ({img1, img2, img3, titulo1, titulo2, titulo3, descripcion1, descripcion2, descripcion3, link1, link2, link3}) => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <a href={link1}>
            <img src={img1} className="d-block w-100" alt="..." />
          </a>
          <div className="carousel-caption d-none d-md-block">
            <h5>{titulo1}</h5>
            <p>{descripcion1}</p>
          </div>
        </div>
        <div className="carousel-item">
          <a href={link2}>
            <img src={img2} className="d-block w-100" alt="..." />
          </a>
          <div className="carousel-caption d-none d-md-block">
            <h5>{titulo2}</h5>
            <p>{descripcion2}</p>
          </div>
        </div>
        <div className="carousel-item">
          <a href={link3}>
            <img src={img3} className="d-block w-100" alt="..." />
          </a>
          <div className="carousel-caption d-none d-md-block">
            <h5>{titulo3}</h5>
            <p>{descripcion3}</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
