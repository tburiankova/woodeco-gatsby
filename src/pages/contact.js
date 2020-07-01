import React from "react"

// components
import ContactForm from "../components/contactForm"
import SEO from "../components/seo"

function Contact() {
  return (
    <>
      <SEO
        title="Contact"
        description="The Contact Page of Woodeco company. Get in touch with us, we will be happy to answer any of your questions."
      />
      <div className="container">
        <div className="contact-page-wrapper">
          <h1>Get In Touch</h1>
          <p>
            Whether you want to contact us regarding an existing project,
            inquire about our pricing, setting up a meeting in person, or just
            find out more about our working process - any case, we will be more
            than happy to assist you. We will make sure to reply as soon as
            possible. For urgent matters, please do not hesitate to reach us on
            directly on
            <b> 070 0617 2853</b>.
          </p>
          <div className="form-wrapper">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
