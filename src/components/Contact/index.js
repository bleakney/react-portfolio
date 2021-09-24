import React from 'react';

function Contact () {

    return (
        <div className="contact-section">
            <div className="contact-form-container">
                <h1>Contact</h1>
                <form className="contact-form">
                    <div className="mb-3">
                        <label className="form-label" htmlFor="name-input">Name:</label>
                        <input className="form-control" type="text" name="name-input" aria-label="name"></input>
                        <label className="form-label" htmlFor="email-input">Email:</label>
                        <input className="form-control" type="email" name="email-input" aria-label="email address"></input>
                        <textarea className="form-control" rows="5" aria-label="personal message"></textarea>
                    </div>
                    <button className="btn" id="contactFormSubmission" type="submit">submit</button>
                </form>
            </div>
        </div>
    )
};

export default Contact;