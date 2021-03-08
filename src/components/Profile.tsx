import React from "react";

import CardHeader from "@material-ui/core/CardHeader";
import TextField from "@material-ui/core/TextField";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

type Props = {
	values: any;
	saveRecords: any;
	handleChange: any;
};

const Profile: React.FunctionComponent<Props> = ({
	values,
	handleChange,
	saveRecords,
}) => {
	return (
		<React.Fragment>
			<CardHeader
				avatar={<AccountCircleIcon fontSize='large' />}
				title='Personal Information'
                style={{
                    padding: '0',
                    marginBottom: '1em'
                }}
			/>
			<TextField
				onChange={e => {
					saveRecords(e);
					handleChange(e);
				}}
				name='submission{4}{first}'
				label='Name'
				value={values["submission{4}{first}"]}
			/>
			<TextField
				onChange={e => {
					saveRecords(e);
					handleChange(e);
				}}
				name='submission{4}{last}'
				label='Surname'
				value={values["submission{4}{last}"]}
			/>
			<TextField
				onChange={e => {
					saveRecords(e);
					handleChange(e);
				}}
				name='submission{5}'
				label='Email'
				value={values["submission{5}"]}
			/>
			<TextField
				onChange={e => {
					saveRecords(e);
					handleChange(e);
				}}
				name='submission{6}{area}'
				label='Area'
				value={values["submission{6}{area}"]}
				type='tel'
                style={{
                    maxWidth: '35px'
                }}
			/>
			<TextField
				onChange={e => {
					saveRecords(e);
					handleChange(e);
				}}
				name='submission{6}{phone}'
				label='Phone'
				value={values["submission{6}{phone}"]}
				type='tel'
                style={{
                    maxWidth: '100px'
                }}
			/>
			<TextField
				onChange={e => {
					saveRecords(e);
					handleChange(e);
				}}
				name='submission{130}'
				label='Website'
				value={values["submission{130}"]}
                type='url'
			/>

			<TextField
				onChange={e => {
					saveRecords(e);
					handleChange(e);
				}}
				name='submission{129}'
				label='Applied Position'
				value={values["submission{129}"]}
			/>
			<TextField
				onChange={e => {
					saveRecords(e);
					handleChange(e);
				}}
				name='submission{28}'
				label='Profile'
				value={values["submission{28}"]}
                fullWidth
                rowsMax={6}
                multiline
                rows={3}
                variant='outlined'
			/>
		</React.Fragment>
	);
};

export default Profile;
