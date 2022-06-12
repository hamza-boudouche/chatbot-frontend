import React from 'react';
import AddEventForm from './FormTypes/Google calendar/AddEventForm';
import UpdateEventForm from './FormTypes/Google calendar/UpdateEventForm';
import GetEventForm from './FormTypes/Google calendar/GetEventForm';
import DeleteEventForm from './FormTypes/Google calendar/DeleteEventForm';
import GetTasksForm from './FormTypes/Trello/GetTasksForm';
import RemoveTasksForm from './FormTypes/Trello/RemoveTasksForm';
import AddTasksForm from './FormTypes/Trello/AddTasksForm';

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
    case 'get_task':
      return (
        <GetTasksForm sendMessageSocket={sendMessageSocket} />
      );
    case 'add_task':
      return (
        <AddTasksForm sendMessageSocket={sendMessageSocket} />
      );
    case 'delete_task':
      return (
        <RemoveTasksForm sendMessageSocket={sendMessageSocket} />
      );
    default:
      break;
  }
};

export default Form;
