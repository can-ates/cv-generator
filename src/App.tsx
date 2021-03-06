import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "./reducers";

import Gradient from "./images/Gradient.jpg";
import Home from "./components/Home";
import ApplicationForm from "./components/ApplicationForm";

import {setTemplate} from './actions'

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			height: "100%",
			background: "rgba(255, 255, 255, 0.15)",
			boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.25 )",
			backdropFilter: "blur(10)",
			"-webkit-backdrop-filter": "blur(10)",
			
		},
		contentWrapper: {
			height: "100%",
			minHeight: '100vh'
		},
	})
);

const App: React.FunctionComponent = () => {
	const phase = useSelector((state: RootState) => state.phase.phase);
	const dispatch = useDispatch()
	const classes = useStyles();
	
	useEffect(() => {
		if(localStorage.getItem('part') === '1'){
			dispatch(setTemplate(localStorage.getItem('reportId')!))
		}
	}, [])

	//Global Styles
	const GlobalCss = withStyles({
		"@global": {
			"*": {
				margin: "0",
				padding: "0",
				boxSizing: "border-box",
				verticalAlign: "baseline",
			},
			body: {
				height: "100%",
				minHeight: '100vh',
				backgroundImage: `url(${Gradient})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "100% 100%",
			},
		},
	})(() => null);

	return (
		<Container className={classes.container} maxWidth='lg'>
			<GlobalCss />
			<Grid className={classes.contentWrapper} container direction='row'>
				{phase.part === 0 ? (
					<Home />
				) : (
					<ApplicationForm />
				)}
			</Grid>
		</Container>
	);
};

export default App;
