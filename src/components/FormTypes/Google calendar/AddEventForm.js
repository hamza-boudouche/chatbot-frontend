import React, { useState } from 'react';
import logo from '../../../assets/bot.png';

const AddEventForm = ({ sendMessageSocket, info }) => {
  const [title, setTitle] = useState(info?.title || '');
  const [description, setDescription] = useState(info?.description || '');
  const [startTime, setStartTime] = useState(info?.startTime || '');
  const [endTime, setEndTime] = useState(info?.endTime || '');

  const sendRequest = (e) => {
    e.preventDefault();
    const data = { title, description, startTime, endTime };
    sendMessageSocket({ text: data, isForm: true, formType: 'add_event' });
  };

  return (
    <>
      <div className={`message received`}>
        <div className="avatar">
          <img
            // src="https://cdn-icons-png.flaticon.com/512/1250/1250689.png"
            src={logo}
            alt="profile"
          />
        </div>
        <form className="form-body" onSubmit={sendRequest}>
          <h5>Add event</h5>
          <label className="contained">Event title</label>
          <input
            type="text"
            name="name"
            placeholder="title"
            className="data_input"
            onChange={(e) => setTitle(e.target.value)}
          />
          <label className="contained">Description</label>
          <input
            type="text"
            name="name"
            placeholder="description"
            className="data_input"
            onChange={(e) => setDescription(e.target.value)}
          />
          <label className="contained">Start time</label>
          <input
            type="text"
            name="name"
            placeholder="start"
            className="data_input"
            onChange={(e) => setStartTime(e.target.value)}
          />
          <label className="contained">End time</label>
          <input
            type="text"
            name="name"
            placeholder="end"
            className="data_input"
            onChange={(e) => setEndTime(e.target.value)}
          />
          <input type="submit" value="Add" className="data_submit" />
        </form>
      </div>
    </>
  );
};

export default AddEventForm;
