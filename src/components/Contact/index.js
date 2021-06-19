import React, { useState } from 'react'
import { validateEmail } from '../../utils/helpers'


function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const { name, email, message } = formState;

    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);

            console.log(isValid);

            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }


        console.log('errorMessage ' + errorMessage);
    }

    // submit handler to be used in backend development
    // function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log(formState);
    // }

    return (
        <section className="contact-cont rounded-border section-bkg">
            <div className="row">
                <div className="col-sm">
                    <h1 className="p-3">Contact Me : </h1>
                </div>
            </div>
            <form className="row" id="contact-form">
                <div className="mb-3 p-2">
                    <div className="col-sm p-2">
                        <label className="form-label p-4 align-top" htmlFor="name">Name:</label>
                        <input className="" type="text" name="name" defaultValue={name} onBlur={handleChange} />
                    </div>
                </div>
                <div className="mb-3 p-2">
                    <div className="col-sm p-2">
                        <label className="form-label p-4 align-top" htmlFor="email">Email:</label>
                        <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                    </div>
                </div>
                <div className="mb-3 p-2">
                    <div className="col-sm p-2">
                        <label className="form-label p-4 align-top" htmlFor="message">Message:</label>
                        <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                    </div>
                </div>
                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}
                <div className="mb-3 col-sm p-3 text-center">
                    <button className="btn btn-secondary" type="submit">Submit</button>
                </div>
            </form>
        </section>
    );
}


export default ContactForm;