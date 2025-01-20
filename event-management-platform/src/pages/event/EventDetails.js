import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEventDetails } from '../../redux/slices/eventSlice';

export default function EventDetails() {
  const { id } = useParams(); // Get the event ID from the URL
  const dispatch = useDispatch();
  const event = useSelector((state) => state.events.events.find((e) => e._id === id));
  const loading = useSelector((state) => state.events.status === 'loading');
  const error = useSelector((state) => state.events.error);

  useEffect(() => {
    // Only fetch the event if it's not already present in the store
    if (!event) {
      dispatch(fetchEventDetails(id)); // Fetch event details if not already present in the store
    }
  }, [dispatch, id, event]);

  if (loading) {
    return <div className="event-details-container">Loading...</div>;
  }

  if (error) {
    return <div className="event-details-container">{error}</div>;
  }

  if (!event) {
    return <div className="event-details-container">Event not found</div>;
  }

  return (
    <div className="event-details-container">
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      <p>{event.location}</p>
      <p>{event.category}</p>
    </div>
  );
}
