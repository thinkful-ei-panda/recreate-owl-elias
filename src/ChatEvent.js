import React from "react";
import ChatMessage from './ChatMessage';
import './ChatEvent.css'

export default function ChatEvent(props) {
  const { timestamp, participant, type, message } = props;
  if (type === "message") {
    return (
      <ChatMessage
        participant={participant}
        timestamp={timestamp}
        message={message}
      />
    );
  }

  let text;
  if (type === "thumbs-up") {
    text = "gave a thumbs up";
  } else if (type === "thumbs-down") {
    text = "gave a thumbs down";
  } else if (type === "clap") {
    text = "clapped";
  } else if (type === "raise-hand") {
    text = "raise their hand";
  } else if (type === "join") {
    text = "joined the room";
  } else if (type === "leave") {
    text = "left the room";
  } else if (type === "join-stage") {
    text = "joined the stage";
  } else if (type === "leave-stage") {
    text = "left the stage";
  }
  return (
    <div className="chat-event">
      <span className="chat-event-participant-name">
        {participant.name}
      </span> {text}
    </div>
  );
}