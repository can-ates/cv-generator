import React from "react";

import CardHeader from "@material-ui/core/CardHeader";
import TextField from "@material-ui/core/TextField";
import WorkIcon from '@material-ui/icons/Work';

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
				avatar={<WorkIcon fontSize='large' />}
				title='Work Experince'
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
				name='submission{79}'
				label='Company'
				value={values["submission{79}"]}
			/>
            <TextField
				onChange={e => {
					saveRecords(e);
					handleChange(e);
				}}
				name='submission{77}'
				label='Job Title'
				value={values["submission{77}"]}
			/>
            <TextField
				onChange={e => {
					saveRecords(e);
					handleChange(e);
				}}
				name='submission{128}'
				label='City'
				value={values["submission{128}"]}
			/>
			<TextField
				onChange={e => {
					saveRecords(e);
					handleChange(e);
				}}
				name='submission{82}{day}'
				label='DD'
				value={values["submission{82}{day}"]}
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
				name='submission{82}{month}'
				label='MM'
				value={values["submission{82}{month}"]}
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
				name='submission{82}{year}'
				label='YY'
				value={values["submission{82}{year}"]}
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
				name='submission{83}{day}'
				label='DD'
				value={values["submission{83}{day}"]}
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
				name='submission{83}{month}'
				label='MM'
				value={values["submission{83}{month}"]}
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
				name='submission{83}{year}'
				label='YY'
				value={values["submission{83}{year}"]}
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
				name='submission{85}'
				label='Description of Duties'
				value={values["submission{85}"]}
                variant='outlined'
                fullWidth
                multiline
                rowsMax={7}
                rows={4}
			/>
		</React.Fragment>
	);
};

export default Profile;
