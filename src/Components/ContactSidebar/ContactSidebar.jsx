import { useEffect, useState } from 'react'
import { getContactList } from '../../services/contactServices'
import ContactList from '../ContactList/ContactList'

export default function ContactSidebar() {
    const [contacts, setContacts] = useState([])
    const [loadingContacts, setLoadingContacts] = useState(true)

    function loadContacts () {
        setLoadingContacts(true)
        setTimeout(()=>{
            const contact_list_response = getContactList()
            setContacts(contact_list_response)
            setLoadingContacts(false)
        }, 2000)
    }

    useEffect(() => {
        loadContacts()
    }, [])

    console.log(
        'Cargando', loadingContacts,
        '\nContact list', contacts
    );
    

    return (
        <div>
                <ContactList loading={loadingContacts} contact_list={contacts} />
        </div>
    )
}
