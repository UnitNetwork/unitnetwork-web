import React from "react";

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, Button } from "@material-ui/core";

const useStyles = makeStyles({
	root: {
		backgroundColor: 'transparent',
		border: 'none',
		boxShadow: 'none',
		color: 'white',
		paddingTop: 20
	},
	title: {
		// flexGrow: 1,
	},
	userInfo: {
		alignItems: "center",
		display: "flex",
	},
});

const Header: React.FC = () => {
	const classes = useStyles();

	return (
		<AppBar position="static" color="inherit" className={classes.root}>
			<Toolbar>
				<IconButton edge="start" color="inherit">
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" className={classes.title}>
					Unit Network
				</Typography>
				{new Array(5).fill(0).map(() => <Button>Test</Button>)}
			</Toolbar>
		</AppBar>
	);
};

export default Header;
