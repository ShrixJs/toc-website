/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import './styles.css';
import emailjs from '@emailjs/browser';

type FormValues = {
  email: string;
  message: string;
};

type Errors = {
  emailInputErrors: boolean | null;
  messageSentErrors: boolean | null;
};

const validEmailPattern = /^\w+(['.-]\w+)*@\w+([.-]\w+)*\.\w+([.-]\w+)*$/;

const ContactUs: FC = () => {
  const [values, setValues] = useState<FormValues>({ email: '', message: '' });
  const [errors, setErrors] = useState<Errors>({ emailInputErrors: null, messageSentErrors: null });
  const [isEmailSent, setIsEmailSent] = useState<boolean>(false);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!errors.emailInputErrors) {
      emailjs.sendForm(
        process.env.EMAIL_SERVICE_ID as string,
        process.env.EMAIL_TEMPLATE_ID as string,
        e.currentTarget,
        process.env.EMAIL_PUBLIC_KEY as string,
      )
        .then(() => setIsEmailSent(true))
        .catch(() => setErrors({ ...errors, messageSentErrors: true }));
    }
  };

  const validateEmail = (email: string) => {
    setErrors({ ...errors, emailInputErrors: false });
    if (!validEmailPattern.test(email)) {
      setErrors({ ...errors, emailInputErrors: true });
    }
  };

  const handleChange = (value: string, field: 'email' | 'message') => {
    if (isEmailSent) setIsEmailSent(false);

    setValues({ ...values, [field]: value });
  };

  return (
    <section id="contact-us" className="contact-us">
      <h3><FormattedMessage id="contactUs" /></h3>
      <div className="contact-us-content">
        <form className="contact-us-form" onSubmit={handleFormSubmit}>
          <label htmlFor="e-mail"><FormattedMessage id="email" /></label>
          <input
            id="e-mail"
            type="text"
            name="e-mail"
            className={`email-field ${errors.emailInputErrors ? 'error' : ''}`}
            value={values.email}
            onChange={(e) => handleChange(e.target.value, 'email')}
            onBlur={(e) => validateEmail(e.target.value)}
          />
          {errors.emailInputErrors && <p className="error-message"><FormattedMessage id="invalidEmailFromat" /></p>}
          <label htmlFor="message">
            <FormattedMessage id="message" />
          </label>
          <textarea id="message" name="message" onChange={(e) => handleChange(e.target.value, 'message')} />
          <button type="submit">
            <FormattedMessage id="sendMessage" />
          </button>
          {isEmailSent && <p className="success"><FormattedMessage id="emailSentSuccess" /></p>}
          {errors.messageSentErrors && <p className="failure"><FormattedMessage id="emailFailedToSend" /></p>}
        </form>
        <div className="contact-us-right">
          <ul>
            <li>
              <i className="fa-solid fa-check" />
              <p>Lorem ipsum dolor sit.</p>
            </li>
            <li>
              <i className="fa-solid fa-check" />
              <p>amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <i className="fa-solid fa-check" />
              <p>Blanditiis labore dicta quaerat sapiente adipisci.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
