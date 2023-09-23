// import { useEffect, useState } from 'react';
// import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Container } from './ContactForm/ContactForm.styled';
// import initialContacts from '../initialContacts.json';

// const getInitialContacts = () => {
//   const savedContacts = localStorage.getItem('contacts');
//   if (savedContacts !== null) {
//     return JSON.parse(savedContacts);
//   } else {
//     return initialContacts;
//   }
// };

// export const App = () => {
// const [contacts, setContacts] = useState(getInitialContacts);
// const [filter, setFilter] = useState('');

// useEffect(() => {
//   localStorage.setItem('contacts', JSON.stringify(contacts));
// }, [contacts]);

// const addContact = ({ name, number }) => {
//   if (checkContact(name)) {
//     alert(`${name} is already in contacts`);
//     return;
//   }

//   const contact = { id: nanoid(), name, number };

//   setContacts(prevState => [...prevState, contact]);
// };
// const checkContact = name => {
//   return contacts.some(
//     contact => contact.name.toLowerCase() === name.toLowerCase()
//   );
// };

// const deleteContact = id => {
//   setContacts(contacts => contacts.filter(contact => contact.id !== id));
// };

// const handleFilterChange = e => {
//   const { value } = e.target;
//   setFilter(value);
// };

// const filterContacts = () => {
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );
// };

const App = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default App;
