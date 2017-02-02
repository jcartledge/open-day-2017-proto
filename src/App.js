import React from 'react';
import './App.css';
import events from './data/events.json';
import FilterableEventList from './FilterableEventList';

class App extends React.Component {
  render() {
    return (
      <FilterableEventList events={events} />
    );
  }
}

export default App;
