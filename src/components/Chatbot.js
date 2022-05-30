import React, { useContext, useRef, useCallback, useState, useEffect } from "react";
import Message from "./Message";
import FormMessage from "./FormMessage";
import useSend from "../hooks/useSend";
import MessagesContext from "../context/MessagesContext";
import useMessages from "../hooks/useMessages";
import Form from "./Form";
import AddEventForm from "./FormTypes/Google calendar/AddEventForm";
import UpdateEventForm from "./FormTypes/Google calendar/UpdateEventForm"
import DeleteEventForm from "./FormTypes/Google calendar/DeleteEventForm"
import GetEventForm from './FormTypes/Google calendar/GetEventForm';


const Chatbot = () => {
  const myMessages = useContext(MessagesContext);
  const [state, dispatch] = useMessages(myMessages);
  const dummy = useRef();
  const [btnVisible, setBtnVisible] = useState(false)

  const observer = new IntersectionObserver(
    ([entry]) => {
      console.log(entry)
      setBtnVisible(!entry.isIntersecting)
    }
  )

  useEffect(() => {
    // console.log(dummy.current)
    observer.observe(dummy.current)
    return () => { observer.disconnect() }
  }, [dummy])

  const addReplyMessage = useCallback(
    ({ text, isForm, formType, info }) => {
      dispatch({
        type: "addMessage",
        message: {
          text,
          local: false,
          isForm,
          formType,
          info,
        },
      });
      dummy.current.scrollIntoView({ behavior: "smooth" });
      console.log(text);
    },
    [dispatch, dummy]
  );

  useEffect(() => {
    dummy.current.scrollIntoView({ behavior: "smooth" });
  }, [state.messages])

  const [sendMessageSocket] = useSend(addReplyMessage);

  const sendMessage = (messageValue) => {
    dispatch({
      type: "addMessage",
      message: {
        text: messageValue,
        local: true,
        isForm: false,
      },
    });
    sendMessageSocket({ text: messageValue });
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="chatbot">
      <div className="messages-list">
        {btnVisible && <a href="#end">
          <div id="end-link" onClick={() => dummy.current.scrollIntoView({ behavior: "smooth" })}>
            v
          </div>
        </a>}
        {state.messages &&
          state.messages.map((msg, index) =>
            msg.isForm ? (
              <Form
                key={index}
                sendMessageSocket={sendMessageSocket}
                formType={msg.formType}
                info={msg.info}
              />
            ) : (
              <Message
                key={index}
                message={msg}
                end={index === state.messages.length - 1}
                setBtnVisible={setBtnVisible}
              />
            )
          )}
        {/* <AddEventForm />
        <UpdateEventForm />
        <DeleteEventForm />
        <GetEventForm /> */}
        <div ref={dummy} style={{
          width: 20,
          height: 20,
          backgroundColor: "red"
        }}></div>
        <Message message="" hidden={true} />
      </div>
      <FormMessage sendMessage={sendMessage} dummy={dummy} />
    </div>
  );
};

export default Chatbot;
