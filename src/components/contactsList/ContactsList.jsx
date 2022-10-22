import React from 'react';
import { ListItem, Name, Number, DeleteButton } from './ContactsList.styled';
const ContactItem = ({ contact, onDeleteContact }) => {
  const { name, number, id } = contact;
  return (
    <ListItem>
      <Name>{name}</Name>
      <Number>{number}</Number>

      <DeleteButton type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </DeleteButton>
    </ListItem>
  );
};
export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem
          contact={contact}
          onDeleteContact={onDeleteContact}
          key={contact.id}
        />
      ))}
    </ul>
  );
};
