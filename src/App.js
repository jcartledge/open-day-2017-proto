import React from 'react';
import './App.css';
import events from './data/events.js';
import FilterableEventList from './FilterableEventList';

export default function App() {
  return <FilterableEventList events={events} />;
}
