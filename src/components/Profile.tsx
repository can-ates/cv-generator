import React from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import Divider from "@material-ui/core/Divider";
import CardHeader from "@material-ui/core/CardHeader";
import TextField from "@material-ui/core/TextField";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { profileFields } from "../helpers";

type Props = {
	values: any;
	debounce?: any;
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
	debounce,
	containerClassName,
}) => {


	
	return (
		<MuiAccordion className={containerClassName}>
			<MuiAccordionSummary expandIcon={<ArrowDownwardIcon />}>
				<CardHeader
					avatar={<AccountCircleIcon fontSize='large' />}
					title='Personal Information'
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
				{profileFields.map(
					({ name, label, type, style, variant, props }: Fields) => (
						<TextField
							key={name}
							onChange={handleChange}
							onInput={debounce((e: any) => {
								return e
							}, 1000)}
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
