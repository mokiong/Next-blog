import { Fragment } from 'react';
import Head from 'next/head';

import ContactForm from '../components/contact/ContactFrom';

function ContactPage() {
    return (
        <Fragment>
            <title>Contact Me</title>
            <meta name="description" content="Send me your messages" />
            <ContactForm />
        </Fragment>
    );
}

export default ContactPage;
