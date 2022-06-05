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
import {Modal} from 'react-bootstrap';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const Slider = ({ open, title, input, setInput, fetch, data, handleClose, setChosen }) => {
	return (
		<Dialog
		    fullscreen
			open={open}
			onClose={handleClose}
			TransitionComponent={Transition}
		>
			<AppBar sx={{ position: 'relative', backgroundColor: '#c96d17',height:'60px',width:'600px' }}>
				<Toolbar sx={{}}>
					<IconButton
						edge="start"
						color="inherit"
						onClick={handleClose}
						aria-label="close"
						sx={{height:'50px',width:'' }}
					>
						{/* <CloseIcon /> */}
						<p>X</p>
					</IconButton>
					<Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
						{title}
					</Typography>
					<TextField style={{
						marginLeft: '1%',
						maxheight: "5px",  
						margin: "1px solid grey",
						backgroundColor: '#F6EEC9',
						borderRadius:'10px',
						padding:'0'}} id="standard-basic" label="Date" variant="standard" color="primary" value={  input} onChange={(e) => { setInput(e.target.value) }} />
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
				{/* {console.log(eventList.length !== 0)} */}
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