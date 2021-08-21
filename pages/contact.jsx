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
          content="A simple resume by Chidiebere Ekennia"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <ContactForm />
      </div>
    </>
  );
}

export default ContactPage;
