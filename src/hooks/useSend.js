import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const useSend = (callbackMessage) => {
  const url = 'http://localhost:5034';
  const token = '';
  const [socket, setSocket] = useState();

  useEffect(() => {
    setSocket(
      io(url, {
        extraHeaders: {
          Authorization: `Bearer ${token.result}`,
        },
      })
    );
    console.log("socket set")
  }, []);

  useEffect(() => {
    socket &&
      socket.on('reply', (message) => {
        console.log(message);
        message.forEach((element) => {
          callbackMessage({ text: element.text, isForm: false });
        });
      });
    socket &&
      socket.on('form', (message) => {
        callbackMessage({
          isForm: true,
          formType: message.formType,
          info: message.info,
        });
      });
  }, [callbackMessage, socket]);

  const sendMessage = ({ text, isForm, formType }) => {
    socket.emit(isForm ? formType : 'message', text);
  };

  return [sendMessage];
};

export default useSend;
