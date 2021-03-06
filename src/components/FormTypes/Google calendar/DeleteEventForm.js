import React from 'react';
import Slider from '../../Slider';
import axios from 'axios'
import logo from '../../../assets/bot.png';

const DeleteEventForm = ({ sendMessageSocket, info }) => {
	const [open, setOpen] = React.useState(false);
	const [startDateNaturalLangage, setStartDateNaturalLangage] = React.useState("");
	const [endDateNaturalLangage, setEndDateNaturalLangage] = React.useState("");
	const [eventList, setEventList] = React.useState([]);
	const [chosen, setChosen] = React.useState({});
	const handleClose = () => {
		setOpen(false);
	};

	const fetchEvents = async () => {
		console.log("fetching the events")
		const resp = await axios.get(`http://localhost:5034/events/${startDateNaturalLangage}/${endDateNaturalLangage}`);
		setEventList(resp.data)
		setStartDateNaturalLangage("")
		setEndDateNaturalLangage("")
	}

	const sendRequest = (e) => {
		e.preventDefault();
		if (chosen) {
			sendMessageSocket({ text: { id: chosen.id }, isForm: true, formType: 'delete_event' });
		} else {
			alert("Please choose an event");
		}
	};

	const handleClickOpen = () => {
		setOpen(true);
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
					<h5>Delete event</h5>
					<label className="contained">Choose an event</label>
					<input
						type="button"
						name="name"
						value="click to choose an event"
						className="data_input form-choose-btn"
						onClick={handleClickOpen}
					/>
					<input type="submit" value="Delete" className="data_submit" />
				</form>
			</div>
			<Slider
				open={open}
				title='choose an event'
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

export default DeleteEventForm;
