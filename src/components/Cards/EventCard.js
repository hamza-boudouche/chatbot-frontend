import React from 'react'
import Card from '@mui/material/Card';

const EventCard = ({ element, isChosen, setChosen, close }) => {
	const timeConverter = (UNIX_timestamp) => {
		var a = new Date(UNIX_timestamp);
		var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		var year = a.getFullYear();
		var month = months[a.getMonth()];
		var date = a.getDate();
		var hour = a.getHours();
		var min = a.getMinutes();
		var sec = a.getSeconds();
		var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
		return time;
	}

	return (
		<Card sx={{ minWidth: "100%", marginBottom: "10px" }} onClick={() => {
			setChosen(element)
			close();
		}}>
			<div className={`card-container ${isChosen ? "card-chosen" : ""}`}>
				<main className="card-main">
					<h5 className="card-title">{element.summary}</h5>
					<p className="card-description">{element.description}</p>
				</main>
				<p className="card-side-info" style={{ marginLeft: 50 }}>{
					`${timeConverter(element.end?.dateTime.value)}`
				}</p>
			</div>
		</Card>
	)
}

export default EventCard
