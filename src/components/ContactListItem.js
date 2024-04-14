import React from 'react';

function ContactListItem({ contact, deleteContact }) {
  const handleDelete = () => {
    deleteContact(contact.id);
  };

  return (
    <li>
      {contact.name} - {contact.number}
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}

export default ContactListItem;
