import React from "react";

import { skillsFields } from "../helpers";

import WidgetsIcon from "@material-ui/icons/Widgets";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import Divider from "@material-ui/core/Divider";
import CardHeader from "@material-ui/core/CardHeader";
import TextField from "@material-ui/core/TextField";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

type Props = {
	values: any;
	saveRecords: any;
	handleChange: any;
	containerClassName: string;
};

interface Fields {
	name: string;
	label: string;
	style?: any;
	type?: string;
	variant?: string;
	props?: any;
}

const Profile: React.FunctionComponent<Props> = ({
	values,
	handleChange,
	saveRecords,
	containerClassName,
}) => {
	return (
		<MuiAccordion className={containerClassName}>
			<MuiAccordionSummary expandIcon={<ArrowDownwardIcon />}>
				<CardHeader
					avatar={<WidgetsIcon fontSize='large' />}
					title='Skills'
					style={{
						padding: "0",
					}}
				/>
			</MuiAccordionSummary>
			<Divider />
			<div
				style={{
					padding: "0 1em",
				}}
			>
				{skillsFields.map(
					({ name, label, type, style, props, variant }: Fields) => (
						<TextField
							key={name}
							onChange={e => {
								saveRecords(e);
								handleChange(e);
							}}
							name={name}
							label={label}
							type={type ?? "string"}
							style={style ?? undefined}
							value={values[name]}
							{...props}
							variant={variant ?? "standard"}
						/>
					)
				)}
			</div>
		</MuiAccordion>
	);
};

export default Profile;
