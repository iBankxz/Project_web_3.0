import React from 'react'

const Products = () => {
  return (
    <section className="product_section">
    <div className="container">
      <div className="product_heading">
        <h2>Más vendidos</h2>
      </div>
      <div className="product_container">
        <div className="box">
          <div className="box-content">
            <div className="img-box">
              <img
                src="https://cdn.koaj.co/195705-thickbox_default/camiseta-manga-corta-de-united-kingdom.jpg"
                alt=""
              />
            </div>
            <div className="detail-box">
              <div className="text">
                <h6>Camiseta manga corta negra</h6>
                <h5><span>$</span> Precio</h5>
              </div>
              <div className="like">
                <h6>Calificación</h6>
                <div className="star_container">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a> AÑADIR AL CARRITO </a>
          </div>
        </div>
        <div className="box">
          <div className="box-content">
            <div className="img-box">
              <img
                src="https://cdn.koaj.co/195701-thickbox_default/camiseta-manga-corta-de-united-kingdom.jpg"
                alt=""
              />
            </div>
            <div className="detail-box">
              <div className="text">
                <h6>Camiseta manga corta blanca</h6>
                <h5><span>$</span> Precio</h5>
              </div>
              <div className="like">
                <h6>Calificación</h6>
                <div className="star_container">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a> AÑADIR AL CARRITO </a>
          </div>
        </div>
        <div className="box">
          <div className="box-content">
            <div className="img-box">
              <img
                src="https://cdn.koaj.co/195733-thickbox_default/sueter-cuello-redondo-con-estampado-de-ac-dc.jpg"
                alt=""
              />
            </div>
            <div className="detail-box">
              <div className="text">
                <h6>Sueter cuello redondo</h6>
                <h5><span>$</span> Precio</h5>
              </div>
              <div className="like">
                <h6>Calificación</h6>
                <div className="star_container">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a> AÑADIR AL CARRITO </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Products