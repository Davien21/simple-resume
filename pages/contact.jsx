import React from "react";
import ContactForm from "./../components/forms/contact";
import Head from "next/head";

function ContactPage(props) {
  return (
    <>
      <Head>
        <title>Chidebere | Contact</title>
        <meta
          name="description"
          content="Hello, My name is Chidiebere Ekennia and I am a Software Developer. This is a simple portfolio website I made so you can learn more about me"
        />
        <link rel="icon" href="/software-2.png" />
      </Head>
      <section className="contact-form-page">
        <ContactForm />
      </section>
    </>
  );
}

export default ContactPage;
