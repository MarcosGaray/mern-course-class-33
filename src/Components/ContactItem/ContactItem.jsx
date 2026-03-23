import React from 'react'

export default function ContactItem({contact}) {
    const { last_message_created_at } = contact

    function parseDate(date) {
        return date.toLocaleString('es-ES', { hour: 'numeric', minute: 'numeric' });
    }

    return (
        <div>
            <h3>{contact.contact_name}</h3>
            <img src={contact.contact_avatar} alt={contact.contact_name} width={50}/>
            <p>{contact.last_message_content}</p>
            <p>{parseDate(last_message_created_at)}</p>
        </div>
    )
}
