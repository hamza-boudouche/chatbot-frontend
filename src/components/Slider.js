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

const Slider = ({ open, title, input, setInput, fetch, data, handleClose, chosen, setChosen }) => {
	return (
		<Dialog
			fullScreen
			open={open}
			onClose={handleClose}
			TransitionComponent={Transition}
		>
			<AppBar sx={{ position: 'relative', backgroundColor: '#6649b8' }}>
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
					<TextField id="standard-basic" label="Start Date" variant="outlined" color="primary" value={input} onChange={(e) => { setInput(e.target.value) }} />
					<TextField id="standard-basic" label="End Date" variant="outlined" color="primary" value={input} onChange={(e) => { setInput(e.target.value) }} sx={{ marginLeft: 2 }} />
					<Button autoFocus variant="outlined" color="inherit" onClick={fetch} style={{
						marginLeft: '10px',
						height: "82%",
						margin: "1px solid grey"
					}}>
						Search
					</Button>
				</Toolbar>
			</AppBar>
			<List style={{
				margin: "auto",
				minWidth: "600px",
				display: "grid",
				alignItems: "center",
				justifyContent: "center",
			}}>
				{data.length ? data.map((element, index) => (
					<div key={index}>
						<EventCard element={element} setChosen={setChosen} />
					</div>
				)) :
					<ListItem button onClick={() => console.log("hello")}>
						<ListItemText primary="enter a date above" secondary="dates in natural language" />
					</ListItem>}
			</List>
		</Dialog>
	)
}

export default Slider