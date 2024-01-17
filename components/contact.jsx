import './contact.scss'
import './partials/fonts.scss'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

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

          // Show a notification on successful email sending
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
    <form className="form__container-div"ref={form} onSubmit={sendEmail}>
      <label className="form__container-div-name">Name</label>
      <input className="form__container-div-name-text" type="text" name="user_name" />
      <label className="form__container-div-email">Email</label>
      <input className="form__container-div-email-text" type="email" name="user_email" />
      <label className="form__container-div-table">Message</label>
      <textarea className="form__container-div-table-table" name="message" />
      <div className="form_container-div">
      <input className="form__container-div-table-message" type="submit" value="Send" />
      </div>
    </form>
  )
}

export default Contact
