import React from 'react'

function ContactusMap() {
  return (
        <>
          {/* ==== contact map start ==== */}
          <div className="contact-map pt-120">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div
                    className="map-inner"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                    data-aos-delay={200}
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20342.411046372905!2d-74.16638039276373!3d40.719832743885284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1649562691355!5m2!1sen!2sbd"
                      width={100}
                      height={800}
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ==== / contact map end ==== */}
        </>
      )

}

export default ContactusMap
