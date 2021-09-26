import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };

    return (
        <section className="main-section">
          <h1>Contact me</h1>
          <div className="form-container">
          <form id="contact-form" onSubmit={submitFormHandler}>
            <div>
              {/* <label htmlFor="name">Name:</label> */}
              <input type="text" name="name" placeholder="name" defaultValue={name} onBlur={handleChange} />
            </div>
            <div>
              {/* <label htmlFor="email">Email address:</label> */}
              <input type="email" name="email" placeholder="email@website.com" defaultValue={email} onBlur={handleChange} />
            </div>
            <div>
              {/* <label htmlFor="message">Message:</label> */}
              <textarea name="message" rows="5" defaultValue={message} placeholder='"Love your work", "Please let us interview you", "You seem like a great potential employee", e.g.' onBlur={handleChange} />
            </div>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            <button className="btn submit-btn" type="submit">Submit</button>
          </form>
          </div>
        </section>
      );
};

export default Contact;