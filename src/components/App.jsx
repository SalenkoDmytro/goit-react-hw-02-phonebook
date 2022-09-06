import { Component } from 'react';
import ContactForm from './ContactForm/';
import Filter from './Filter';
import ContactList from './ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleData = newContacts => {
    const { contacts } = this.state;
    if (
      contacts.some(
        ({ name }) => name.toLowerCase() === newContacts.name.toLowerCase()
      )
    )
      return alert(`${newContacts.name} is already in contacts`);

    this.setState({ contacts: [newContacts, ...contacts] });
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleFilter = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContacts = idToDelete => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== idToDelete),
    }));
  };

  render() {
    const visibleContacts = this.handleFilter();

    return (
      <div style={{ padding: 20 }}>
        <h1 style={{ marginTop: 0 }}>Phonebook</h1>
        <ContactForm onSubmit={this.handleData} />

        <h2>Contacts</h2>
        <Filter onChange={this.handleChange} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContacts}
        />
      </div>
    );
  }
}

export default App;
