import React from 'react'

const Slider = () => {
  return (
    <section className="slider_section">
    <div className="slider_bg_box">
      <img src="images/slider-bg.jpg" alt="" />
    </div>
    <div id="customCarousel1" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="detail-box">
                  <h1>ReTrendy</h1>
                  <p>
                    Tu destino online para moda sostenible y asequible! En
                    nuestra tienda web especializada en ropa de segunda
                    mano, ofrecemos una amplia variedad de prendas
                    cuidadosamente seleccionadas y en excelente estado. ¿Qué
                    esperas? Compra ahora!
                  </p>
                  <div className="btn-box">
                    <a href="contact.html" className="btn1">CONTACTANOS</a>
                    <a href="about.html" className="btn2">ACERCA DE NOSOTROS</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="detail-box">
                  <h1>Tu lugar de confianza</h1>
                  <p>
                    Aquí no solo compras ropa de segunda mano, sino que
                    también te unes a una comunidad comprometida con la moda
                    sostenible. Aquí, la confianza no solo se construye en
                    la calidad de nuestras prendas, sino también en el
                    impacto positivo que generamos juntos en el medio
                    ambiente. ¿Qué esperas? Empieza a vender ya!
                  </p>
                  <div className="btn-box">
                    <a href="registerBuy.html" className="btn1">EMPIEZA A VENDER</a>
                    <a href="about.html" className="btn2">ACERCA DE NOSTROS</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="detail-box">
                  <h1>Somos el futuro</h1>
                  <p>
                    La elegancia se encuentra con la sostenibilidad. En
                    nuestra página, te invitamos a un viaje de
                    descubrimiento, donde cada clic es una oportunidad de
                    reducir el impacto ambiental sin sacrificar el estilo.
                  </p>
                  <div className="btn-box">
                    <a href="contact.html" className="btn1">CONTACTANOS</a>
                    <a href="about.html" className="btn2">ACERCA DE NOSOTROS</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ol className="carousel-indicators">
        <li
          data-target="#customCarousel1"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#customCarousel1" data-slide-to="1"></li>
        <li data-target="#customCarousel1" data-slide-to="2"></li>
      </ol>
    </div>
  </section>
  )
}

export default Slider