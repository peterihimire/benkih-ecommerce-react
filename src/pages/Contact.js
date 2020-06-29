import React from "react";
import Title from "../components/Title";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-center">
        <Title title="contact" />
        <div className="contact-div">
          <div>
            <span className="contact-span">email:</span>peterihimire@gmail.com
          </div>
          <div>
            <span className="contact-span">phone:</span>+234 806 095 8134
          </div>
          <div>
            <span className="contact-span">address:</span>6 Oyediran street,
            Ikeja, Lagos State.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
