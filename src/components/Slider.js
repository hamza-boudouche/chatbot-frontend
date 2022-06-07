import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import EventCard from './Cards/EventCard';
import CloseIcon from '@mui/icons-material/Close';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const Slider = ({ open, title, inputStart, setInputStart, inputEnd, setInputEnd, fetch, data, handleClose, chosen, setChosen }) => {
	return (
		<Dialog
			fullscreen
			open={open}
			onClose={handleClose}
			TransitionComponent={Transition}
		>
			<AppBar sx={{ position: 'relative', backgroundColor: '#c96d17', height: '60px', width: '600px' }}>
				<Toolbar>
					<IconButton
						edge="start"
						color="inherit"
						onClick={handleClose}
						aria-label="close"
						sx={{ height: '50px' }}
					>
						<CloseIcon />
					</IconButton>
					<Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
						{title}
					</Typography>
					<TextField style={{
						marginLeft: '1%',
						maxheight: "5px",
						margin: "1px solid grey",
						backgroundColor: '#F6EEC9',
						borderRadius: '10px',
						padding: '0'
					}} id="standard-basic" label="Start Date" variant="outlined" color="primary" value={inputStart} onChange={(e) => { setInputStart(e.target.value) }} />
					<TextField style={{
						marginLeft: '1%',
						maxheight: "5px",
						margin: "1px solid grey",
						backgroundColor: '#F6EEC9',
						borderRadius: '10px',
						marginLeft: 2,
						padding: '0'
					}} id="standard-basic" label="End Date" variant="outlined" color="primary" value={inputEnd} onChange={(e) => { setInputEnd(e.target.value) }} />
					<Button autoFocus variant="outlined" color="inherit" onClick={fetch} style={{
						marginLeft: '1%',
						height: "30px",
						margin: "1px solid grey"
					}}>
						Search
					</Button>
				</Toolbar>
			</AppBar>
			<List style={{
				margin: "auto",
				minWidth: "60%",
				display: "grid",
				alignItems: "center",
				justifyContent: "center",
			}}>
				{data.length ? data.map((element, index) => (
					<div key={index}>
						<EventCard element={element} setChosen={setChosen} close={handleClose} />
					</div>
				)) :
					<ListItem button onClick={() => console.log("hello")}>
						<ListItemText primary="enter start and end dates above in natural language" />
					</ListItem>}
			</List>
		</Dialog>
	)
}

export default Slider