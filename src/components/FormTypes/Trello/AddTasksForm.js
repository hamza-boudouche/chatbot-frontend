import React, { useEffect } from 'react';
import axios from 'axios'
import logo from '../../../assets/bot.png';
import TrelloSliderAdd from '../../TrelloSliderAdd';

const AddTasksForm = ({ sendMessageSocket }) => {
	const [open, setOpen] = React.useState(false);
	const [board, setBoard] = React.useState([]);

	const handleClose = () => {
		setOpen(false);
	};

	const transform = (data) => {
		data = data.map(col => {
			col.title = col.name
			col.cards = col.cards.map((card) => {
				card.title = card.name
				card.description = card.desc
				return card
			})
			return col
		})

		return data
	}

	useEffect(() => {
		const fetchEvents = async () => {
			console.log("fetching the events")
			const resp = await axios.get(`http://localhost:5034/trello/alllists`);
			setBoard({ columns: transform(resp.data) })
		}

		fetchEvents()
	}, [])

	const sendMessage = () => {
		sendMessageSocket({ text: "/session_start" });
	};

	const handleClickOpen = () => {
		setOpen(true);
		sendMessage();
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
					<h5>Add a task</h5>
					<label className="contained">Add task</label>
					<input
						type="button"
						name="name"
						value="click to fetch events"
						className="data_input form-choose-btn"
						onClick={handleClickOpen}
					/>
				</form>
			</div>
			<TrelloSliderAdd
				open={open}
				title='Trello board'
				tasksList={board}
				handleClose={handleClose} />
		</>
	);
};

export default AddTasksForm;
