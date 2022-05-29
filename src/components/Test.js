import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import axios from 'axios'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ sendMessageSocket }) {
	const [open, setOpen] = React.useState(false);
	const [eventList, setEventList] = React.useState([{
		title: "event",
		description: "this is a description"
	},
	{
		title: "event",
		description: "this is a description"
	}]);
	const [dateNaturalLangage, setDateNaturalLangage] = React.useState("initial");

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const fetchEvents = async () => {
		const resp = await axios.post("http://localhost:5034/events", {
			date: dateNaturalLangage
		})
		setEventList(resp.data)
		setDateNaturalLangage("")
	}

	return (
		<div>
			<Button variant="outlined" onClick={handleClickOpen}>
				Open full-screen dialog
			</Button>
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
							{/* <CloseIcon /> */}
							<p>x</p>
						</IconButton>
						<Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
							Choose an event
						</Typography>
						<TextField id="standard-basic" label="Date" variant="outlined" color="primary" value={dateNaturalLangage} onChange={(e) => { setDateNaturalLangage(e.target.value) }} />
						<Button autoFocus variant="outlined" color="inherit" onClick={fetchEvents} style={{
							marginLeft: '10px',
							height: "60%",
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
					{/* {console.log(eventList.length !== 0)} */}
					{eventList.length ? eventList.map((event, index) => (
						<div key={index}>
							<Card sx={{ minWidth: "600px", padding: "20px", marginBottom: "10px", backgroundColor: "#0b93f6" }}>
								<div styles={{ display: "flex" }}>
									<main>
										<h5>{event.title}</h5>
										<p>{event.description}</p>
									</main>
									<h6>Monday 8am</h6>
								</div>
							</Card>
						</div>
					)) :
						<ListItem button onClick={() => console.log("hello")}>
							<ListItemText primary="enter a date above" secondary="dates in natural language" />
						</ListItem>}
				</List>
			</Dialog>
		</div>
	);
}
