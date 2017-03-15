import React from 'react';
import './EventList.css';
import EventCard from './EventCard';

export default function EventList (props) {
  const eventCards = props.events.map(event => {
    const eventText = (event.title + event.description).toLowerCase();
    const filterText = props.filterText.toLowerCase();
    const isHidden = eventText.indexOf(filterText) === -1;
    return <EventCard key={event.title} event={event} isHidden={isHidden} />
  });
  return (
    <div className="event-list">
      <ul className="event-list__cards">{eventCards}</ul>
    </div>
  );
}
