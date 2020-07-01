import React, { useState } from "react"

function SubscriptionForm() {
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
    <>
      <form
        action="https://formspree.io/xdowdzvv"
        method="POST"
        onSubmit={submitForm}
      >
        <input type="text" name="email" placeholder="Email" />
        <button type="submit">></button>
      </form>
      {state.status === "SUCCESS" && (
        <p className="success">
          Thank you, we have received your subscription.
        </p>
      )}
      {state.status === "ERROR" && (
        <p className="error">An error occurred, please try again.</p>
      )}
    </>
  )
}

export default SubscriptionForm
