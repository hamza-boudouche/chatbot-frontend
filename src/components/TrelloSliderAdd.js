import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Board, { moveCard } from '@asseinfo/react-kanban'
import '@asseinfo/react-kanban/dist/styles.css'
import axios from "axios"

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function TrelloSliderAdd({ tasksList, handleClose, open, title }) {

	const handleAdd = async (list, card) => {
		const resp = await axios.post(`http://localhost:5034/trello/addcards/${list}`, {
			name: card.title,
			desc: card.description
		})
		return resp.data
	}

	return (
		<div>
			<Dialog
				fullScreen
				open={open}
				onClose={handleClose}
				TransitionComponent={Transition}
			>
				<AppBar sx={{ position: 'relative', backgroundColor: 'orange' }}>
					<Toolbar>
						<IconButton
							edge="start"
							color="inherit"
							onClick={handleClose}
							aria-label="close"
						>
							<CloseIcon />
						</IconButton>
						<Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
							{title}
						</Typography>
						<Button autoFocus color="inherit" onClick={handleClose}>
							save
						</Button>
					</Toolbar>
				</AppBar>
				<Board
					initialBoard={tasksList}
					allowAddCard={{ on: "top" }}
					onNewCardConfirm={draftCard => ({
						...draftCard
					})}
					onCardNew={(...elts) => handleAdd(elts[1].id, elts[2])}
					onCardDragEnd={() => { }}
				/>
			</Dialog>
		</div>
	);
}
