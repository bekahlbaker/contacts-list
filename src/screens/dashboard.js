import React, { Component } from 'react';
import styled from 'styled-components';

import Header from '../components/header';
import Grid from '../components/grid';
import EditModal from '../components/editModal';
import SearchBar from '../components/searchbar';

import { getContacts } from '../api/contacts';
import colors from '../style-utils/colors';

const DashboardLayout = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: ${props => props.position};
`;

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      searchValue: '',
      contacts: [],
      filteredContacts: [],
      isEditing: false,
      selectedContact: {},
    };
  }

  componentDidMount() {
    this.fetchContacts();
  }

  // Fetch initial contacts
  fetchContacts = async () => {
    const response = await getContacts(20);
    this.populateContacts(response.results);
    console.log('CONTACTS', response);
  };

  // Populate contacts with passed array
  populateContacts = contacts => {
    this.setState({ contacts: contacts, filteredContacts: contacts });
  };

  // Filter contacts by search value
  handleSearch = searchValue => {
    this.setState({ searchValue }, () => {
      if (searchValue !== '') {
        const filtered = this.state.contacts.filter(
          contact =>
            contact.contact_title
              .toLowerCase()
              .includes(searchValue.toLowerCase()) ||
            contact.year
              .toString()
              .toLowerCase()
              .includes(searchValue.toLowerCase()) ||
            contact.condition
              .toLowerCase()
              .includes(searchValue.toLowerCase()) ||
            contact.artist.name
              .toLowerCase()
              .includes(searchValue.toLowerCase()),
        );
        this.setState({ filteredContacts: filtered });
      } else {
        this.populateContacts(this.state.contacts);
      }
    });
  };

  // Open Edit Modal
  handleSelectContact = contact => {
    this.setState({ selectedContact: contact, isEditing: true });
  };

  handleSave = contact => {
    // Save edited contact
    const index = this.state.contacts.findIndex(
      a => a.contact_title === this.state.selectedContact.contact_title,
    );
    const arr = this.state.contacts;
    arr.splice(index, 1, contact);
    this.populateContacts(arr);

    this.setState({ isEditing: false });
  };

  render() {
    return (
      <DashboardLayout position={this.state.isEditing ? 'fixed' : 'initial'}>
        {this.state.isEditing && (
          <EditModal
            album={this.state.selectedContact}
            handleCancel={() => this.setState({ isEditing: false })}
            handleSave={album => this.handleSave(album)}
          />
        )}
        <Header />
        <SearchBar
          placeholder="Search..."
          value={this.state.searchValue}
          onChange={searchValue => this.handleSearch(searchValue.target.value)}
          isEditing={this.state.isEditing}
        />
        <Grid
          contacts={this.state.filteredContacts}
          onClick={album => this.handleSelectContact(album)}
        />
      </DashboardLayout>
    );
  }
}

export default Dashboard;
