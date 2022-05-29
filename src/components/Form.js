import React from 'react';
import AddEventForm from './FormTypes/Google calendar/AddEventForm';
import UpdateEventForm from './FormTypes/Google calendar/UpdateEventForm';

const Form = ({ sendMessageSocket, formType, info }) => {
  switch (formType) {
    case 'addEventForm':
      return <AddEventForm sendMessageSocket={sendMessageSocket} info={info} />;
    case 'modifyEventForm':
      return (
        <UpdateEventForm sendMessageSocket={sendMessageSocket} info={info} />
      );
    default:
      break;
  }
};

export default Form;
