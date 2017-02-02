import React from 'react';

class FilterForm extends React.Component {
  constructor(props) {
    super(props);
    this.filterTextChanged = this.filterTextChanged.bind(this);
  }

  filterTextChanged() {
    this.props.filterTextChanged(this.filter.value);
  }

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
export default FilterForm;
