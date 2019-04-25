import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Header from '../components/header';
import Grid from '../components/grid';
import EditModal from '../components/editModal';
import SearchBar from '../components/searchbar';

import { getContacts } from '../api/contacts';

const DashboardLayout = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: ${props => props.position};
`;

export default function Dashboard() {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [selectedContact, setSelectedContact] = useState({});

  // Fetch contacts
  useEffect(() => {
    async function fetchContacts() {
      const response = await getContacts(20);
      console.log('RESPONSE', response);
      populateContacts(response.results);
    }

    fetchContacts();
  }, []);

  // Populate contacts with passed array
  function populateContacts(contacts) {
    setContacts(contacts);
    setFilteredContacts(contacts);
  }

  // Filter contacts by search value
  function handleSearch(searchValue) {
    setSearchValue(searchValue);
    if (searchValue !== '') {
      const filtered = contacts.filter(
        contact =>
          contact.name.first
            .toLowerCase()
            .includes(searchValue.toLowerCase()) ||
          contact.name.last
            .toString()
            .toLowerCase()
            .includes(searchValue.toLowerCase()) ||
          contact.email.toLowerCase().includes(searchValue.toLowerCase()) ||
          contact.location.street
            .toLowerCase()
            .includes(searchValue.toLowerCase()),
      );
      setFilteredContacts(filtered);
    } else {
      populateContacts(contacts);
    }
  }

  // Open Edit Modal
  function handleSelectContact(contact) {
    setSelectedContact(contact);
    setIsEditing(true);
  }

  function handleSave(contact) {
    // Save edited contact
    const index = contacts.findIndex(a => a.phone === selectedContact.phone);
    const arr = contacts;
    arr.splice(index, 1, contact);
    populateContacts(arr);

    setIsEditing(false);
  }

  return (
    <DashboardLayout position={isEditing ? 'fixed' : 'initial'}>
      {isEditing && (
        <EditModal
          contact={selectedContact}
          handleCancel={() => setIsEditing(false)}
          handleSave={album => handleSave(album)}
        />
      )}
      <Header />
      <SearchBar
        placeholder="Search..."
        value={searchValue}
        onChange={searchValue => handleSearch(searchValue.target.value)}
        isEditing={isEditing}
      />
      <Grid
        contacts={filteredContacts}
        onClick={contact => handleSelectContact(contact)}
      />
    </DashboardLayout>
  );
}
