import React, { FC, useState } from 'react';
import './styles.css';

type FormValues = {
  email: string;
  message: string;
};

const ContactUs: FC = () => {
  const [values, setValues] = useState<FormValues>();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values, setValues);
  };

  return (
    <section id="contact-us" className="contact-us">
      <h3>Contact Us</h3>
      <div className="contact-us-content">
        <form className="contact-us-form" onSubmit={handleFormSubmit}>
          <input type="text" value={values?.email} />
          <textarea />
          <button type="submit">Send Message</button>
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
