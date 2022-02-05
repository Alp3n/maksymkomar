import * as React from "react"
// import PropTypes from "prop-types"
import styled from "styled-components"

const BookForm = () => {
  return (
    <div>
      <div>
        <h3>Zapisz się na wizytę</h3>
      </div>
      <div>
        <form method="post" action="#">
          <label>
            Name
            <input type="text" name="name" id="name" />
          </label>
          <label>
            Email
            <input type="email" name="email" id="email" />
          </label>
          <label>
            Subject
            <input type="text" name="subject" id="subject" />
          </label>
          <label>
            Message
            <textarea name="message" id="message" rows="5" />
          </label>
          <button type="submit">Send</button>
          <input type="reset" value="Clear" />
        </form>
      </div>
    </div>
  )
}

export default BookForm

/* STYLED COMPONENTS */
