import React from 'react'

const About = () => {
  return (
    <section className="about_section layout_padding">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className="img_container">
            <div className="img-box b1">
              <img
                src="https://i.pinimg.com/736x/a2/5b/4d/a25b4dbebc6357e7d323bf0132cbbebd.jpg"
                alt=""
              />
            </div>
            <div className="img-box b2">
              <img
                src="https://media.gq.com.mx/photos/6398d2adf773a1a8874e3a12/1:1/w_2000,h_2000,c_limit/mejor-ropa-de-hombre-en-2023.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="detail-box">
            <h2>ACERCA DE NUESTRA TIENDA</h2>
            <p>
              Somos tu destino para abrazar la moda sostenible con estilo y
              conciencia. En nuestro espacio virtual, te invitamos a explorar
              una cuidadosa selección de prendas únicas y de alta calidad,
              cada una con su propia historia y encanto.
            </p>
            <a> Leer más </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About;