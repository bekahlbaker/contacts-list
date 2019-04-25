import React, { Component } from 'react';
import styled from 'styled-components';

import Header from '../components/header';
import Grid from '../components/grid';
import EditModal from '../components/editModal';
import SearchBar from '../components/searchbar';
import HoverButton from '../components/hoverButton';

import { getAlbums } from '../api/albums';
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
      albums: [],
      filteredAlbums: [],
      isEditing: false,
      selectedAlbum: {},
      currentPage: 1,
      morePagesAvailable: false,
    };
  }

  componentDidMount() {
    this.fetchAlbums();
  }

  // Fetch initial albums
  fetchAlbums = async () => {
    const response = await getAlbums(this.state.currentPage);
    this.setState({ morePagesAvailable: response.nextPage });
    this.populateAlbums(response.results);
  };

  // Load More Albums
  loadMoreAlbums = async () => {
    const response = await getAlbums(this.state.currentPage + 1);
    this.setState({ morePagesAvailable: response.nextPage });
    const updated = [...this.state.albums, ...response.results];
    this.populateAlbums(updated);
  };

  // Populate albums with passed array
  populateAlbums = albums => {
    this.setState({ albums: albums, filteredAlbums: albums });
  };

  // Filter albums by search value
  handleSearch = searchValue => {
    this.setState({ searchValue }, () => {
      if (searchValue !== '') {
        const filtered = this.state.albums.filter(
          album =>
            album.album_title
              .toLowerCase()
              .includes(searchValue.toLowerCase()) ||
            album.year
              .toString()
              .toLowerCase()
              .includes(searchValue.toLowerCase()) ||
            album.condition.toLowerCase().includes(searchValue.toLowerCase()) ||
            album.artist.name.toLowerCase().includes(searchValue.toLowerCase()),
        );
        this.setState({ filteredAlbums: filtered });
      } else {
        this.populateAlbums(this.state.albums);
      }
    });
  };

  // Open Edit Modal
  handleSelectAlbum = album => {
    this.setState({ selectedAlbum: album, isEditing: true });
  };

  handleSave = album => {
    // Save edited album
    const index = this.state.albums.findIndex(
      a => a.album_title === this.state.selectedAlbum.album_title,
    );
    const arr = this.state.albums;
    arr.splice(index, 1, album);
    this.populateAlbums(arr);

    if (album.artist.name !== this.state.selectedAlbum.artist.name) {
      // Find all artists and change name
      const updatedArr = this.state.albums.map(a => {
        if (a.artist.id === this.state.selectedAlbum.artist.id) {
          return {
            ...a,
            artist: { ...a.artist, name: album.artist.name },
          };
        }
        return a;
      });
      this.populateAlbums(updatedArr);
    }
    this.setState({ isEditing: false });
  };

  render() {
    return (
      <DashboardLayout position={this.state.isEditing ? 'fixed' : 'initial'}>
        {this.state.isEditing && (
          <EditModal
            album={this.state.selectedAlbum}
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
          albums={this.state.filteredAlbums}
          onClick={album => this.handleSelectAlbum(album)}
        />
        {this.state.morePagesAvailable && (
          <HoverButton
            title="More"
            fontColor={colors.darkAccent}
            onClick={() => this.loadMoreAlbums()}
          />
        )}
      </DashboardLayout>
    );
  }
}

export default Dashboard;
