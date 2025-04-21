import React from 'react'
import ContactCard from './modules/ContactCard'
import contactData from "../data/contact.json"

function Contact() {
    return (
        <div className='p-4 min-h-screen bg bg-primary rounded-t-4xl' id='contact'>
            <h1 className='text-5xl text-center mt-10 text-white'>Contact</h1>
            <div className='flex flex-col gap-4 justify-center py-24'>
                {contactData.map(contact => <ContactCard key={contact.title} contact={contact} />)}
            </div>
        </div>
    )
}

export default Contact