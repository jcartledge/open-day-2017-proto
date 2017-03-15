import React from 'react';
import FilterForm from './FilterForm';
import EventList from './EventList';

export default class FilterableEventList extends React.Component {
  state = {filterText: ''}
  filterTextChanged = (filterText) => this.setState({filterText});

  render() {
    return (
      <div className="filterable-event-list">
        <FilterForm
          filterText={this.state.filterText}
          filterTextChanged={this.filterTextChanged}
        />
        <EventList
          events={this.props.events}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}
