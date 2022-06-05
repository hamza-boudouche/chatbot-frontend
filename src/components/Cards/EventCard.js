import React from 'react'
import Card from '@mui/material/Card';

const EventCard = ({ element, isChosen, setChosen }) => {
	return (
			<Card sx={{ minWidth: "100%", marginBottom: "10px" }} onClick={() => setChosen(element)}>
				<div className={`card-container ${isChosen ? "card-chosen" : ""}`}>
					<main className="card-main">
						<h5 className="card-title">{element.title}</h5>
						<p className="card-description">{element.description}</p>
					</main>
					<p className="card-side-info">Monday 8am</p>
				</div>
			</Card>
	)
}

export default EventCard