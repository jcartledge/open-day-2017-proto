import React from 'react';
import FilterForm from './FilterForm';
import EventList from './EventList';

class FilterableEventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '1'
    };
    this.filterTextChanged = this.filterTextChanged.bind(this);
  }

  filterTextChanged(filterText) {
    this.setState({filterText});
  }

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
 export default FilterableEventList;
