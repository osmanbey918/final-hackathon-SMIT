import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../../redux/slices/eventSlice';
import { useNavigate } from 'react-router-dom';
import "./home.css";
const Home = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.events);  // Get all events from Redux
  const status = useSelector((state) => state.events.status);  // Get the status (loading, etc.)
  const navigate = useNavigate();

  // Fetch all events when the component mounts or refreshes
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchEvents());
    }
  }, [dispatch, status]);  // Only dispatch when status is idle

  // Navigate to event details when clicked
  const specificEventDetail = (id) => {
    navigate(`/event-details/${id}`);
  };

  return (
    <div>
      <h2>Upcoming Events</h2>
      <ul className="event-list">
        {events.map(event => (
          <li key={event._id} className="event-item">
            <h3>{event.title}</h3>
            <button onClick={() => specificEventDetail(event._id)}>Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
