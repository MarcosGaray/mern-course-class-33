import ContactItem from '../ContactItem/ContactItem'
export default function ContactList({
    loading,
    contact_list
}) {

    if (loading) return (
        <div>
            <p>Loading...</p>
        </div>
    )

    if (!contact_list || contact_list.length === 0) return (
        <div>
            <p>No hay contactos en los chats</p>
        </div>
    )

    return (
        <div>
            {
                contact_list.map((contact) => {
                    return <ContactItem key={contact.contact_id} contact={contact} />;
                })
            }
        </div>
    )
}
