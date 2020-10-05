import React from 'react';
import './App.css';
import RealEstateHeader from './components/real-estate-header/RealEstateHeader';
import RealEstateListing from './components/real-estate-listing/RealEstateListing';

class App extends React.Component {
  initialState = [
    {
      title: 'Nice Home1',
      location: 'New York',
      price: 500000,
      id: '109',
    },
    {
      title: 'Nice Home2',
      location: 'Los Angeles',
      price: 500000,
      id: '108',
    },
    {
      title: 'Nice Home3',
      location: 'New York',
      price: 500000,
      id: '107',
    },
    {
      title: 'Nice Home4',
      location: 'Los Angeles',
      price: 500000,
      id: '106',
    },
    {
      title: 'Nice Home5',
      location: 'New York',
      price: 500000,
      id: '105',
    },
  ];

  state = {
    query: '',
    listings: this.initialState,
    filteredListings: [],
    isFiltered: false,
    isEdit: false,
    title: '',
    price: '',
    location: '',
    currentListing: {},
  };

  handleQueryChange = (e) => {
    if (e.target.value) {
      this.setState({ isFiltered: true });
    } else this.setState({ isFiltered: false });
    this.setState({ query: e.target.value });
  };

  handleEditClick = (e) => {
    const item = this.state.listings.filter(
      (listing) => listing.id === e.target.value
    );
    this.setState({
      isEdit: true,
      currentListing: item[0],
      title: item[0].title,
      price: item[0].price,
      location: item[0].location,
    });
  };

  handleDeleteClick = (e) => {
    const newListings = this.state.listings.filter(
      (listing) => listing.id !== e.target.value
    );
    this.setState({ listings: newListings });
  };

  clearInput = () => {
    this.setState({
      isEdit: false,
      title: '',
      price: '',
      location: '',
      currentListing: {},
    });
  };

  handleAddOrEditClick = () => {
    if (this.state.isEdit) {
      const newListing = {
        title: this.state.title,
        location: this.state.location,
        price: +this.state.price,
        id: this.state.currentListing.id,
      };
      this.editCurrentListing(newListing);
    } else {
      const newListing = {
        title: this.state.title,
        location: this.state.location,
        price: +this.state.price,
        id: Math.floor(Math.random() * 101).toLocaleString(),
      };
      this.addListing(newListing);
    }
    this.clearInput();
  };

  editCurrentListing = (newListing) => {
    this.setState({
      listings: this.state.listings.map((listing) =>
        listing.id === this.state.currentListing.id ? newListing : listing
      ),
    });
  };

  addListing = (newListing) => {
    this.setState({ listings: [newListing, ...this.state.listings] });
  };

  setPrice = (e) => {
    this.setState({ price: e.target.value });
  };

  setTitle = (e) => {
    this.setState({ title: e.target.value });
  };

  setLocation = (e) => {
    this.setState({ location: e.target.value });
  };

  componentDidUpdate = (prevProps, prevState) => {
    // if query or listings change run...
    if (
      this.state.listings !== prevState.listings ||
      this.state.query !== prevState.query
    ) {
      if (this.state.query) {
        const filteredListings = this.state.listings.filter(
          (listing) => listing.location === this.state.query
        );
        this.setState({
          filteredListings: filteredListings,
          //currentListings: filteredListings,
        });
      } else
        this.setState({
          filteredListings: [],
          //currentListings: this.state.listings,
        });
    }
  };

  render() {
    const currentListings = this.state.isFiltered
      ? this.state.filteredListings
      : this.state.listings;
    return (
      <div className="app">
        <RealEstateHeader
          query={this.state.query}
          handleQueryChange={this.handleQueryChange}
          isEdit={this.state.isEdit}
          title={this.state.title}
          price={this.state.price}
          location={this.state.location}
          clearInput={this.clearInput}
          handleAddOrEditClick={this.handleAddOrEditClick}
          setPrice={this.setPrice}
          setTitle={this.setTitle}
          setLocation={this.setLocation}
        />
        {currentListings.length === 0 && (
          <h2 style={{ paddingTop: 10, textAlign: 'center' }}>No Results</h2>
        )}
        <RealEstateListing
          listings={currentListings}
          handleEditClick={this.handleEditClick}
          handleDeleteClick={this.handleDeleteClick}
        />
      </div>
    );
  }
}

export default App;
