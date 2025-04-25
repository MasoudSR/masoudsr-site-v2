import React from 'react'
import ContactCard from './modules/ContactCard'
import contactData from "../data/contact.json"

function Contact() {
    return (
        <div className='p-4 bg-primary rounded-t-4xl lg:rounded-none mt-26 py-28' id='contact'>
            <div className='max-w-screen-lg m-auto'>
                <h1 className='text-5xl text-center text-white drop-shadow-2xl drop-shadow-white'>Contact</h1>
                <div className='grid lg:grid-cols-2 gap-4 mt-24'>
                    {contactData.map(contact => <ContactCard key={contact.title} contact={contact} />)}
                </div>
            </div>
        </div>
    )
}

export default Contact