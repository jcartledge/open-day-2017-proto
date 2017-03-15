import React from 'react';

export default class FilterForm extends React.Component {
  filterTextChanged = _ => this.props.filterTextChanged(this.filter.value);

  render() {
    return (
      <div className="filter-form">
        <input
          ref={input => this.filter = input}
          onChange={this.filterTextChanged}
          value={this.props.filterText}
          className="filter-form__filter"
          placeholder="Filter events"
        />
      </div>
    );
  }
}
