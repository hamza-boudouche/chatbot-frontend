import React, { useState } from 'react';
import axios from 'axios'
import Slider from '../../Slider';
import logo from './user.png';

const UpdateEventForm = ({ sendMessageSocket, info }) => {
  const [title, setTitle] = useState(info?.title || '');
  const [description, setDescription] = useState(info?.description || '');
  const [startTime, setStartTime] = useState(info?.startTime || '');
  const [endTime, setEndTime] = useState(info?.endTime || '');
  const [open, setOpen] = React.useState(false);
  const [eventList, setEventList] = React.useState([{
    title: "event",
    description: "this is a description"
  },
  {
    title: "event",
    description: "this is a description"
  }]);
  const [startDateNaturalLangage, setStartDateNaturalLangage] = React.useState("");
  const [endDateNaturalLangage, setEndDateNaturalLangage] = React.useState("");
  const [chosen, setChosen] = React.useState({});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchEvents = async () => {
    const resp = await axios.get("http://localhost:5034/events", {
      startDate: startDateNaturalLangage,
      endDate: endDateNaturalLangage,
    })
    setEventList(resp.data)
    setStartDateNaturalLangage("")
    setEndDateNaturalLangage("")
  }

  const sendRequest = (e) => {
    e.preventDefault();
    if (chosen) {
      const data = { id: chosen, title, description, startTime, endTime };
      sendMessageSocket({
        text: data,
        isForm: true,
        formType: 'update_event',
      });
    }
    else {
      alert("Please choose an event");
    }
  };

  return (
    <>
      <div className={`message received`}>
        <div className="avatar">
          <img
            src={logo}
            alt="profile"
          />
        </div>
        <form className="form-body" onSubmit={sendRequest}>
          <h5>Update event</h5>
          <label className="contained">Choose an event</label>
          <input
            type="button"
            name="name"
            value="click to choose an event"
            className="data_input form-choose-btn"
            onClick={handleClickOpen}
          />
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
          <input type="submit" value="Update" className="data_submit" />
        </form>
      </div>
      <Slider
        open={open}
        title='something'
        inputStart={startDateNaturalLangage}
        setInputStart={setStartDateNaturalLangage}
        inputEnd={endDateNaturalLangage}
        setInputEnd={setEndDateNaturalLangage}
        fetch={fetchEvents}
        data={eventList}
        handleClose={handleClose}
        chosen={chosen}
        setChosen={setChosen} />
    </>
  );
};

export default UpdateEventForm;
