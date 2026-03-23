import contacts_data from "../data/contactData";

function getContactList() {
    return contacts_data;
}

function getContactById(id) {
    for (const contact of contacts_data) {
        if (Number(contact.contact_id) === Number(id)) {
            return contact;
        }
    }
}



export { 
    getContactList,
    getContactById
}
