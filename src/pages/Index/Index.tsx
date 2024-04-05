import React from "react";

const Index = () => {
  return (
    <div>
      <section className="slider_section">
        <div className="slider_bg_box">
          <img src="images/slider-bg.jpg" alt="" />
        </div>
        <div
          id="customCarousel1"
          className="carousel slide"
          data-ride="carousel"
        >
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
                        <a className="btn1">CONTACTANOS</a>
                        <a className="btn2">ACERCA DE NOSOTROS</a>
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
                        <a className="btn1">EMPIEZA A VENDER</a>
                        <a className="btn2">ACERCA DE NOSTROS</a>
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
                        <a className="btn1">CONTACTANOS</a>
                        <a className="btn2">ACERCA DE NOSOTROS</a>
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

      <section className="service_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="box">
                <div className="img-box">
                  <img src="images/feature-1.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>Entrega rápida</h5>
                  <p>
                    La moda sostenible se combina con la rapidez de la entrega!
                    Nuestra dedicación a tu experiencia de compra incluye un
                    servicio de entrega rápido y eficiente!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="box">
                <div className="img-box">
                  <img src="images/feature-2.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>Envío seguro</h5>
                  <p>
                    Tu tranquilidad es nuestra prioridad! Nos enorgullece
                    ofrecer un servicio de envío seguro que garantiza que tus
                    prendas favoritas lleguen a tus manos de manera intacta y
                    protegida!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="box">
                <div className="img-box">
                  <img src="images/feature-3.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>calidad garantizada</h5>
                  <p>
                    Te brindamos una experiencia donde la calidad está
                    garantizada! Cada prenda que forma parte de nuestra
                    cuidadosa selección pasa por rigurosos procesos de
                    inspección para asegurar que cumpla con los más altos
                    estándares.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="box">
                <div className="img-box">
                  <img src="images/feature-4.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>Página super optima</h5>
                  <p>
                    Nuestra página ha sido diseñada pensando en ti, combinando
                    la elegancia del estilo con la eficiencia de la navegación.
                    Explora de manera fluida nuestro catálogo de moda
                    sostenible, donde cada clic te acerca a descubrir tesoros
                    únicos y tendencias conscientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  conciencia. En nuestro espacio virtual, te invitamos a
                  explorar una cuidadosa selección de prendas únicas y de alta
                  calidad, cada una con su propia historia y encanto.
                </p>
                <a> Leer más </a>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                    <h5>
                      <span>$</span> Precio
                    </h5>
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
                    <h5>
                      <span>$</span> Precio
                    </h5>
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
                    <h5>
                      <span>$</span> Precio
                    </h5>
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

      <section className="contact_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>CONTACTANOS</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form_container">
                <form action="">
                  <div>
                    <input type="text" placeholder="Nombre" />
                  </div>
                  <div>
                    <input type="number" placeholder="Número de telefono" />
                  </div>
                  <div>
                    <input type="email" placeholder="Correo" />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="message-box"
                      placeholder="Mensaje"
                    />
                  </div>
                  <div className="btn_box">
                    <button>ENVIAR</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
