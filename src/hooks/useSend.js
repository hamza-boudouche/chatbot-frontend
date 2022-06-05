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
  }, []);

  useEffect(() => {
    socket &&
      socket.on('reply', (message) => {
        // callbackMessage({ text: message.text, isForm: false });
        message.forEach((element) => {
          console.log(element)
          if (element.custom) {
            console.log("i am adding a form")
            callbackMessage({
              isForm: true,
              formType: element.custom.formtype,
              info: element.custom.info,
            });
          } else {
            callbackMessage({ text: element.text, isForm: false });
          }
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
