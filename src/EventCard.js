import React from 'react';

class EventCard extends React.Component {
  render() {
    const event = this.props.event;
    return (
      <li className="event-card">
        <img className="event-card__image" role="presentation" src={event.image} />
        <div className="event-card__title">{event.title}</div>
        <div className="event-card__description">{event.description}</div>
      </li>
    );
  }
}

export default EventCard;
