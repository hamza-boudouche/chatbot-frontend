import React, { useState } from 'react';
import Slider from '../../Slider';
import axios from 'axios'


const DeleteEventForm = ({ sendMessageSocket, info }) => {
	const [open, setOpen] = React.useState(false);
	const [dateNaturalLangage, setDateNaturalLangage] = React.useState("initial");
	const [eventList, setEventList] = React.useState([{
		title: "event",
		description: "this is a description"
	},
	{
		title: "event",
		description: "this is a description"
	}]);
	const [chosen, setChosen] = React.useState({});
	const handleClose = () => {
		setOpen(false);
	};

	const fetchEvents = async () => {
		const resp = await axios.post("http://localhost:5034/events", {
			date: dateNaturalLangage
		})
		setEventList(resp.data)
		setDateNaturalLangage("")
	}

	const sendRequest = (e) => {
		e.preventDefault();
		sendMessageSocket({ text: {}, isForm: true, formType: 'delete_event' });
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	return (
		<>
			<div className={`message received`}>
				<div className="avatar">
					<img
						src="https://cdn-icons-png.flaticon.com/512/1250/1250689.png"
						alt="profile"
					/>
				</div>
				<form className="form-body" onSubmit={sendRequest}>
					<label className="contained">Choose an event</label>
					<input
						type="button"
						name="name"
						value="click to choose an event"
						className="data_input form-choose-btn"
						onClick={handleClickOpen}
					/>
					<input type="submit" value="Envoyer" className="data_submit" />
				</form>
			</div>
			<Slider open={open} title='something' input={dateNaturalLangage} setInput={setDateNaturalLangage} fetch={fetchEvents} data={eventList} handleClose={handleClose} setChosen={setChosen} />
		</>
	);
};

export default DeleteEventForm;
