import React, { useState, useRef } from 'react';
import micro from '../assets/micro.png';
import record from '../assets/record.png';
import msg from '../assets/msg.png';

import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
const FormMessage = ({ sendMessage, dummy }) => {
  const [messageValue, setMessageValue] = useState('');
  const [listening, setListening] = useState(false);
  const { transcript, resetTranscript } = useSpeechRecognition();

  const microphoneRef = useRef(null);

  const startListening = (e) => {
    e.preventDefault();
    resetTranscript();
    setListening(true);
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopListening = (e) => {
    e.preventDefault();
    SpeechRecognition.stopListening();
    setMessageValue(transcript);
    setListening(false);
    microphoneRef.current.classList.remove('listening');
    resetTranscript();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(messageValue);
    setMessageValue('');
    dummy.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        value={listening ? transcript : messageValue}
        onChange={(e) => setMessageValue(e.target.value)}
        placeholder="Type your message here"
        type="text"
        className="message-field"
      />
      <div className="form-btn send-btn">
      <img
        className="imgsend"
        src={listening ? record : micro}
        onClick={listening ? stopListening : startListening}
      />
      </div>
      {/* <img
        className="form-btn send-btn imgsend"
        src={listening ? record : micro}
        onClick={listening ? stopListening : startListening}
      /> */}
      {/* { <input
        type="button"
        className="form-btn voice-btn"
        value={listening ? 'stop' : 'start'}
        onClick={listening ? stopListening : startListening}
      />} */}
      <input
        type="submit"
        className="form-btn send-btn imginput"
        value=''
        disabled={!messageValue}
      />
    </form>
  );
};

export default FormMessage;
