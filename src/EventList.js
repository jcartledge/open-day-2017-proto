import React from 'react';
import EventCard from './EventCard';

class EventList extends React.Component {
  render() {
    const events = this.props.events.filter(event => event.title.indexOf(this.props.filterText) !== -1);
    const eventCards = events.map(event => <EventCard key={event.title} event={event} />);
    return (
      <div className="event-list">
        <ul className="event-list__cards">{eventCards}</ul>
      </div>
    );
  }
}
 export default EventList;
