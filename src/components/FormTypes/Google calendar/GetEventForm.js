import React from 'react';
import Slider from '../../Slider';
import axios from 'axios'
import logo from './user.png';

const GetEventForm = ({ sendMessageSocket, info }) => {
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
				<form className="form-body">
					<h5>Fetch events</h5>
					<label className="contained">Fetch events</label>
					<input
						type="button"
						name="name"
						value="click to fetch events"
						className="data_input form-choose-btn"
						onClick={handleClickOpen}
					/>
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
				setChosen={() => { }} />
		</>
	);
};

export default GetEventForm;
