import React from 'react'

const Contact = () => {
  return (
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
  )
}

export default Contact