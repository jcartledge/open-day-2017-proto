import React from 'react';
import './EventCard.css';

export default function EventCard (props) {
  return (
    <li className={"event-card" + (props.isHidden ? " event-card--hidden" : "")}>
      <img className="event-card__image" role="presentation" src={props.event.image} />
      <div className="event-card__title">{props.event.title}</div>
      <div className="event-card__description">{props.event.description}</div>
    </li>
  );
}
