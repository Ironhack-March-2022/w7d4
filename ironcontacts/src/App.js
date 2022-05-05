import React, { useState } from 'react';
import allContacts from './contacts.json';
import './App.css';
import ContactList from './ContactList';
import SearchField from './SearchField';

function App() {

  const [contacts, setContacts] = useState(allContacts.slice(0, 5))

  const [query, setQuery] = useState('')

  function deleteContact(contactId) {
    setContacts(contacts => contacts.filter(contact => contact.id !== contactId))
  };


  const addContact = () => {
    const random = allContacts[Math.floor(Math.random() * allContacts.length)];

    // checking if in the state of contacts we already have the random contact
    if (contacts.find(contact => contact.id === random.id)) {
      // checking if there is still some contacts to add
      if (contacts.length < allContacts.length) {
        addContact();
      }
      return;
    }
    setContacts(contacts => [random, ...contacts])
  };

  const sortByName = () => {
    const sorted = [...contacts];
    sorted.sort((a, b) => a.name.localeCompare(b.name));

    setContacts(sorted)
  };

  const sortByPopularity = () => {
    const sorted = contacts.slice();
    sorted.sort((a, b) => b.popularity - a.popularity);

    setContacts(sorted)
  };

  return (
    <div className='App'>

      <h1>IronContacts</h1>

      <SearchField setQuery={setQuery} />

      <button onClick={addContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>

      <ContactList
        contacts={contacts}
        deleteContact={deleteContact}
        query={query}
      />
    </div>
  );
}

export default App;