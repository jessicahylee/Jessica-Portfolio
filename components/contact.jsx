import './contact.scss'
import './partials/fonts.scss'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import contact from './assets/contact.png'
import { Link, Element } from 'react-scroll'

function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_awkwa68',
        'template_oes0fhp',
        form.current,
        'vYkvvzRiJn58iwtwh',
      )
      .then(
        (result) => {
          console.log(result.text)

          if (Notification.permission === 'granted') {
            new Notification('Email Sent', {
              body: 'Your email has been sent successfully!',
            })
          } else if (Notification.permission !== 'denied') {
            Notification.requestPermission().then((permission) => {
              if (permission === 'granted') {
                new Notification('Email Sent', {
                  body: 'Your email has been sent successfully!',
                })
              }
            })
          }
        },
        (error) => {
          console.log(error.text)
        },
      )
  }

  return (
    <div>
      <Link
        className="contact-title"
        to="contact"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
      >
        Contact me
      </Link>

      <Element name="contact" className="form__container-div">
        <form className="form__container-div" ref={form} onSubmit={sendEmail}>
          <div className="div__form">
            <div className="form__container-div-name1">
              <label className="form__container-div-name">Name</label>

              <input
                className="form__container-div-name-text"
                type="text"
                name="user_name"
              />
            </div>
            <div className="form__container-div-2">
              <label className="form__container-div-email">Email</label>
              <input
                className="form__container-div-email-text"
                type="email"
                name="user_email"
              />
            </div>
            <div className="form__container-div-message">
              <label className="form__container-div-table">Message</label>
              <textarea
                className="form__container-div-table-table"
                name="message"
              />
            </div>
          </div>
          <div className="form_container-div">
            <input
              className="form__container-div-table-message"
              type="submit"
              value="Send"
            />
          </div>
          {/* <div className="form__container-image">
            <img
              className="form__container-image-pic"
              src={contact}
              width="530vx"
              alt="Contact"
            />
          </div> */}
    
        </form>
      </Element>
    </div>
  )
}

export default Contact
