import React from 'react'

const Footer = () => {
  return (
    <section className="info_section layout_padding2">
    <div className="container">
      <div className="info_logo">
        <h2>Más de nosotros</h2>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="info_info">
            <h5>Información</h5>
            <p>Aviso de privacidad Terminos y condiciones</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="info_insta">
            <h5>Más Productos</h5>
            <div className="insta_container">
              <div className="row m-0">
                <div className="col-4 px-0">
                  <a>
                    <div className="insta-box b-1">
                       <img src="" alt="" /> 
                    </div>
                  </a>
                </div>
                <div className="col-4 px-0">
                  <a>
                    <div className="insta-box b-1">
                       <img src="" alt="" /> 
                    </div>
                  </a>
                </div>
                <div className="col-4 px-0">
                  <a>
                    <div className="insta-box b-1">
                       <img src="" alt="" /> 
                    </div>
                  </a>
                </div>
                <div className="col-4 px-0">
                  <a>
                    <div className="insta-box b-1">
                       <img src="" alt="" /> 
                    </div>
                  </a>
                </div>
                <div className="col-4 px-0">
                  <a>
                    <div className="insta-box b-1">
                       <img src="" alt="" /> 
                    </div>
                  </a>
                </div>
                <div className="col-4 px-0">
                  <a>
                    <div className="insta-box b-1">
                      <img src="" alt="" /> 
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="info_form">
            <h5>Recibe nuestras ofertas!</h5>
            <form action="">
              <input type="email" placeholder="Ingresa tu correo"/>
              <button>Suscribirse</button>
            </form>
            <div className="social_box">
              <a>
                <img src="images/fb.png" alt="" />
              </a>
              <a>
                <img src="images/twitter.png" alt="" />
              </a>
              <a>
                <img src="images/linkedin.png" alt="" />
              </a>
              <a>
                <img src="images/youtube.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Footer