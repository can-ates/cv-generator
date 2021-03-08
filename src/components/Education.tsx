import React from "react";

import CardHeader from "@material-ui/core/CardHeader";
import TextField from "@material-ui/core/TextField";
import MenuBookIcon from '@material-ui/icons/MenuBook';

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
				avatar={<MenuBookIcon fontSize='large' />}
				title='Education'
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
				name='submission{34}'
				label='Name of the school'
				value={values["submission{34}"]}
			/>
			<TextField
				onChange={e => {
					saveRecords(e);
					handleChange(e);
				}}
				name='submission{39}'
				label='Field of study'
				value={values["submission{39}"]}
			/>
			<TextField
				onChange={e => {
					saveRecords(e);
					handleChange(e);
				}}
				name='submission{40}'
				label='Type of degree'
				value={values["submission{40}"]}
			/>
			<TextField
				onChange={e => {
					saveRecords(e);
					handleChange(e);
				}}
				name='submission{125}'
				label='City'
				value={values["submission{125}"]}
				style={{
                    maxWidth: '140px'
                }}
			/>
			<TextField
				onChange={e => {
					saveRecords(e);
					handleChange(e);
				}}
				name='submission{126}{day}'
				label='DD'
				value={values["submission{126}{day}"]}
                type='number'
                style={{
                    maxWidth: '35px'
                }}
                helperText='Start Date'
			/>
            <TextField
				onChange={e => {
					saveRecords(e);
					handleChange(e);
				}}
				name='submission{126}{month}'
				label='MM'
				value={values["submission{126}{month}"]}
                type='number'
                style={{
                    maxWidth: '35px'
                }}
			/>
            <TextField
				onChange={e => {
					saveRecords(e);
					handleChange(e);
				}}
				name='submission{126}{year}'
				label='YY'
				value={values["submission{126}{year}"]}
                type='number'
                style={{
                    maxWidth: '50px'
                }}
			/>
            <TextField
				onChange={e => {
					saveRecords(e);
					handleChange(e);
				}}
				name='submission{127}{day}'
				label='DD'
				value={values["submission{127}{day}"]}
                type='number'
                style={{
                    maxWidth: '35px'
                }}
                helperText='End Date'
			/>
            <TextField
				onChange={e => {
					saveRecords(e);
					handleChange(e);
				}}
				name='submission{127}{month}'
				label='MM'
				value={values["submission{127}{month}"]}
                type='number'
                style={{
                    maxWidth: '35px'
                }}
			/>
            <TextField
				onChange={e => {
					saveRecords(e);
					handleChange(e);
				}}
				name='submission{127}{year}'
				label='YY'
				value={values["submission{127}{year}"]}
                type='number'
                style={{
                    maxWidth: '50px'
                }}
			/>
		</React.Fragment>
	);
};

export default Profile;
