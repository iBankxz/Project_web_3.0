import React from 'react'

const About = () => {
  return (
    <section className="about_section layout_padding">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className="img_container">
            <div className="img-box b1">
              <img src="https://blogs.funiber.org/wp-content/uploads/2021/10/funiblog-ma-ropa-sostenible-570x350.jpg" alt=""/>
            </div>
            <div className="img-box b2">
              <img src="https://www.chio-lecca.edu.pe/cdn/shop/articles/chio-lecca-blog-moda-sostenible.jpg?v=1689406136" alt=""/>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="detail-box">
            <h2>
              ¿Quiénes somos?
            </h2>
            <p>
              En ReTrendy, nos apasiona la moda sostenible y creemos en el poder de dar nueva vida a la ropa de segunda mano. 
              Somos un equipo comprometido con la misión de promover un estilo de vida más ético y consciente, 
              ofreciendo una amplia selección de prendas cuidadosamente seleccionadas.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="detail-box">
            <h2>
              ¿Por qué lo hacemos?
            </h2>
            <p>
              Nos inspira el desafío de cambiar la percepción de la moda y demostrar que es posible lucir increíble mientras se toman decisiones responsables para el planeta. 
              Creemos firmemente en la importancia de reducir el desperdicio textil y fomentar una economía circular donde la moda sea más sostenible y accesible para todos.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="detail-box">
            <h2>
              ¿Cómo puedes ayudarnos?
            </h2>
            <p>
              ¡Tú puedes ser parte del cambio! Ayúdanos a difundir el mensaje de la moda sostenible compartiendo nuestras prendas y nuestra misión con tus amigos y familiares. 
              Además, al elegir comprar con nosotros, estás contribuyendo activamente a la reducción del impacto ambiental de la industria de la moda.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About;