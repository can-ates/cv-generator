import React from "react";

import CardHeader from "@material-ui/core/CardHeader";
import TextField from "@material-ui/core/TextField";
import WidgetsIcon from '@material-ui/icons/Widgets';

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
				avatar={<WidgetsIcon fontSize='large' />}
				title='Skills'
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
				name='submission{124}'
				label='Skills and Occupations'
				value={values["submission{124}"]}
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
