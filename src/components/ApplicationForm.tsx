import React, { ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";

import Profile from "./Profile";
import Education from "./Education";
import Skills from "./Skills";
import WorkExperience from "./WorkExperince";

import { setTemplate, submitForm, changeHandler } from "../actions";
import { RootState } from "../reducers";
import { formSchema, formValues } from "../helpers";

import { createStyles, makeStyles, Theme } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		formContainer: {
			maxWidth: "40em",
			width: "100%",
			margin: "2em 0",
			position: 'relative'
		},
		backButton:{
			position: 'absolute',
			color:'#ffffff',
			zIndex: 2,
			border: '2px solid black',
			borderRadius: '0.3em',
			fontSize: '50px',
			backgroundColor: '#000000',
			left: -25,
			top: -20,
			cursor: 'pointer',
			
		},
		form: {
			padding: "2em",
			background: "rgba(255, 255, 255, 0.4)",
			backdropFilter: "blur(5px)",
			"-webkit-backdrop-filter": "blur(5px)",
			boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.2 )",
			borderRadius: "0.5em",
		},

	})
);

const ApplicationForm: React.FunctionComponent = () => {
	const dispatch = useDispatch();
	const state = useSelector((state: RootState) => state);
	const classes = useStyles();

	useEffect(() => {
		Object.keys(localStorage).forEach(key => {
			if (key.includes("{")) {
				const fieldName = key;
				const fieldValue = localStorage[key];
				dispatch(changeHandler({ fieldName, fieldValue }));
			}
		});
	}, []);

	const saveRecords = (
		e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
	) => {
		const fieldName = e.target.name;
		const fieldValue = e.target.value;

		dispatch(changeHandler({ fieldName, fieldValue }));
		localStorage.setItem(fieldName, fieldValue);
	};

	const handleSubmit = (values: any, actions: any) => {
		let parsedValues: any = {};
		const formData = state.form.formData;

		//we should replace curly braces with square brackets
		//in order to SEND ACCURATE QUERY PARAMETER FOR JOTFORM API
		for (let key of Object.keys(formData)) {
			if (key.match(/.*\{.*\}.*/)) {
				const squared = key.replace(/\{/g, "[").replace(/}/g, "]");
				parsedValues[squared] = formData[key];
			} else parsedValues[key] = formData[key];
		}

		dispatch(submitForm(parsedValues));
		// submitForm(parsedValues) ;
		
	};

	const goPrevious = () => {
		localStorage.setItem('part', '0')
		localStorage.removeItem('reportId')
        dispatch(setTemplate(""))
	}

	return (
		<Grid
			item
			container
			direction='column'
			alignItems='center'
			justify='center'
		>
			<Grid item className={classes.formContainer}>
				<ArrowBackIcon onClick={goPrevious} fontSize='large' className={classes.backButton} />
				<Formik
					initialValues={formValues}
					validationSchema={formSchema}
					onSubmit={handleSubmit}
				>
					{({ handleChange, values }) => (
						<Form>
							<Card className={classes.form}>
								<Profile
									handleChange={handleChange}
									saveRecords={saveRecords}
									values={values}
								/>
								<Education
									handleChange={handleChange}
									saveRecords={saveRecords}
									values={values}
								/>
								<Skills
									handleChange={handleChange}
									saveRecords={saveRecords}
									values={values}
								/>
								<WorkExperience
									handleChange={handleChange}
									saveRecords={saveRecords}
									values={values}
								/>
								<Button
									type='submit'
									fullWidth={true}
									size='large'
									variant='contained'
								>
									{state.template.isDownloading ? (
										<CircularProgress />
									) : (
										"Download"
									)}
								</Button>
							</Card>
						</Form>
					)}
				</Formik>
			</Grid>
		</Grid>
	);
};

export default ApplicationForm;
