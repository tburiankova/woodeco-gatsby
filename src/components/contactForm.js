import React, { useState } from "react"

function ContactForm() {
  const [state, setState] = useState({ status: "" })

  function submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        setState({ status: "SUCCESS" })
      } else {
        setState({ status: "ERROR" })
      }
    }
    xhr.send(data)
  }

  return (
    <form
      onSubmit={submitForm}
      action="https://formspree.io/mzbjvgrg"
      method="POST"
    >
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" placeholder="Your name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your email address"
        />
      </div>

      <div>
        <label htmlFor="email">Subject</label>
        <div className="select-wrapper">
          <select
            type="subject"
            name="subject"
            id="subject"
            placeholder="What does your message concern?"
          >
            <option value="" disabled selected>
              What does your message concern?
            </option>
            <option value="Services">Services</option>
            <option value="Pricing">Pricing</option>
            <option value="Meeting inquiry">Meeting inquiry</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          placeholder="Your message"
          rows="10"
        />
      </div>

      {state.status === "SUCCESS" ? (
        <div>
          <p className="success">
            Thank you, we have successfully received your inquiry, and will get
            back to you as soon as possible!
          </p>
        </div>
      ) : (
        <div>
          <button type="submit" className="link filter-btn">
            Submit
          </button>
        </div>
      )}
      {state.status === "ERROR" && (
        <div>
          <p className="error">
            Something went wrong, please try again or contact us on 070 0617
            2853.
          </p>
        </div>
      )}
    </form>
  )
}

export default ContactForm
