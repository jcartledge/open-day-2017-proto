import React from 'react';
import './EventList.css';
import EventCard from './EventCard';

class EventList extends React.Component {
  render() {
    const eventCards = this.props.events.map(event =>
      <EventCard key={event.title} event={event} isHidden={this.isHidden(event)} />
    );
    return (
      <div className="event-list">
        <ul className="event-list__cards">{eventCards}</ul>
      </div>
    );
  }

  isHidden(event) {
    const eventText = (event.title + event.description).toLowerCase();
    const filterText = this.props.filterText.toLowerCase();
    return eventText.indexOf(filterText) === -1;
  }
}
 export default EventList;
