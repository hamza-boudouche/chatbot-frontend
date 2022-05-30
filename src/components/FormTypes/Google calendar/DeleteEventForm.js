import React from 'react';
import Slider from '../../Slider';
import axios from 'axios'


const DeleteEventForm = ({ sendMessageSocket, info }) => {
	const [open, setOpen] = React.useState(false);
	const [startDateNaturalLangage, setStartDateNaturalLangage] = React.useState("");
	const [endDateNaturalLangage, setEndDateNaturalLangage] = React.useState("");
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
			sendMessageSocket({ text: { id: chosen }, isForm: true, formType: 'delete_event' });
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
						src="https://cdn-icons-png.flaticon.com/512/1250/1250689.png"
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

export default DeleteEventForm;
