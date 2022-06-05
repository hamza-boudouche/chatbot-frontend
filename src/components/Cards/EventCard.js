import React from 'react'
import Card from '@mui/material/Card';

const EventCard = ({ element, isChosen, setChosen, close }) => {
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
				<p className="card-side-info" style={{ marginLeft: 50 }}>{JSON.stringify((new Date(element.start?.dateTime.value * 1000)).toLocaleDateString("en-US"))}</p>
			</div>
		</Card>
	)
}

export default EventCard