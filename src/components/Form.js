import React from 'react';
import AddEventForm from './FormTypes/Google calendar/AddEventForm';
import UpdateEventForm from './FormTypes/Google calendar/UpdateEventForm';
import GetEventForm from './FormTypes/Google calendar/GetEventForm';
import DeleteEventForm from './FormTypes/Google calendar/DeleteEventForm';

const Form = ({ sendMessageSocket, formType, info }) => {
  switch (formType) {
    case 'add_event':
      return <AddEventForm sendMessageSocket={sendMessageSocket} info={info} />;
    case 'update_event':
      return (
        <UpdateEventForm sendMessageSocket={sendMessageSocket} info={info} />
      );
    case 'get_event':
      return (
        <GetEventForm sendMessageSocket={sendMessageSocket} info={info} />
      );
    case 'delete_event':
      return (
        <DeleteEventForm sendMessageSocket={sendMessageSocket} info={info} />
      );
    default:
      break;
  }
};

export default Form;
