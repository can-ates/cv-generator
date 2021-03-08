import React, { ChangeEvent } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { Formik, Form } from "formik";

import Profile from "./Profile";
import Education from "./Education";
import Skills from "./Skills";
import WorkExperience from "./WorkExperince";

import {submitForm} from '../actions'
import { formSchema, formValues } from "../helpers";

import { createStyles, makeStyles, Theme } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button"
import CircularProgress from '@material-ui/core/CircularProgress';
import { RootState } from "../reducers";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		formContainer: {
			maxWidth: "40em",
			width: "100%",
			margin: '2em 0'
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
	const dispatch = useDispatch()
	const state = useSelector((state: RootState) => state)
	const classes = useStyles();

	const saveRecords = (
		e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
	) => {
		const fieldName = e.target.name;
		const fieldValue = e.target.value;

		localStorage.setItem(fieldName, fieldValue);
	};

	const handleSubmitt = (values: any, actions: any) => {
		let parsedValues: any = {};

		//we should replace curly braces with square brackets
		//in order to SEND ACCURATE QUERY PARAMETER FOR JOTFORM API
		for (let key of Object.keys(values)) {
			if (key.match(/.*\{.*\}.*/)) {
				const squared = key.replace(/\{/g, "[").replace(/}/g, "]");
				parsedValues[squared] = values[key];
			} else parsedValues[key] = values[key];
		}

		dispatch(submitForm(parsedValues))
		// submitForm(parsedValues);
		// localStorage.clear()
	};

	return (
		<Grid
			item
			container
			direction='column'
			alignItems='center'
			justify='center'
		>
			<Grid item className={classes.formContainer}>
				<Formik
					initialValues={formValues}
					validationSchema={formSchema}
					onSubmit={handleSubmitt}
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
								<Button type='submit' fullWidth={true} size='large' variant='contained' >{
									state.template.isDownloading ? <CircularProgress /> : 'Download'
								}</Button>
							</Card>
						</Form>
					)}
				</Formik>
			</Grid>
		</Grid>
	);
};

export default ApplicationForm;
