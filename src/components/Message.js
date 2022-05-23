import React, { useRef, useEffect } from 'react';
import useOnScreen from "../hooks/useOnScreen"

const Message = ({ message: { local, text }, hidden, end, setBtnVisible }) => {
  const messageClass = local ? 'sent' : 'received';
  const ref = useRef(null)
  // console.log(ref)
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    console.log(ref.current);
  }, [ref]);

  useEffect(() => {
    setBtnVisible && setBtnVisible(!isVisible)
  }, [])

  return (
    <div className={`message ${messageClass} ${hidden ? "hidden" : ""}`} id={end ? "end" : ""} ref={ref}>
      <div className="avatar">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1250/1250689.png"
          alt="avatar"
        />
      </div>
      <div className="message-body">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Message;
