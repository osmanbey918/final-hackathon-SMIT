import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function EventDetails() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // useEffect(() => {
  //   const fetchEventDetails = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:5000/api/events/${eventId}`);
  //       setEvent(response.data);
  //       setLoading(false);
  //     } catch (err) {
  //       setError('Failed to fetch event details');
  //       setLoading(false);
  //     }
  //   };

  //   fetchEventDetails();
  // }, [eventId]);

  // if (loading) {
  //   return <div className="event-details-container">Loading...</div>;
  // }

  // if (error) {
  //   return <div className="event-details-container">{error}</div>;
  // }

  return (
    <div className="event-details-container">
      {/* <h1>{event.name}</h1>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Description:</strong> {event.description}</p>
      <p><strong>Category:</strong> {event.category}</p> */}
      <h1>Logo</h1>
      <p><strong>Date:</strong> 12-24-2024</p>
      <p><strong>Location:</strong> karachi</p>
      <p><strong>Description:</strong>somethings details about written here is working i=on</p>
      <p><strong>Category:</strong> noone</p>

    </div>
  );
}