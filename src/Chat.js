import React from "react";
import ChatEvent from "./ChatEvent";
import "./Chat.css";

export default function Chat(props) {
  const events = props.events.map((event, index) => (
    <li key={index}>
      <ChatEvent
        type={event.type}
        message={event.message}
        timestamp={event.timestamp}
        participant={props.participants.find(
          participant => participant.id === event.participantId
        )}
      />
    </li>
  ));
  return <ul className="chat">{events}</ul>;
}

// Props
// events -> array of objects with type, message, timestamp, participantId
// participants -> array of objects with id