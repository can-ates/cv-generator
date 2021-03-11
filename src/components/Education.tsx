import React, { useState } from "react";

import { educationFields } from "../helpers";

import MenuBookIcon from "@material-ui/icons/MenuBook";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import Divider from "@material-ui/core/Divider";
import CardHeader from "@material-ui/core/CardHeader";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

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
	helperText?: string;
	type?: string;
}

const Profile: React.FunctionComponent<Props> = ({
	values,
	handleChange,
	saveRecords,
	containerClassName,
}) => {
	const [expanded, setExpanded] = useState<boolean | number>(0);
	const [panelCount, setPanelCount] = useState(1);

	const handleAccordion = (panel: number) => (
		event: React.ChangeEvent,
		isExpanded: boolean
	) => {
		setExpanded(isExpanded ? panel : false);
	};

	const handleClick = () => {
		setPanelCount(pr => pr + 1);
		setExpanded(1)
	};

	return (
		<MuiAccordion className={containerClassName}>
			<MuiAccordionSummary expandIcon={<ArrowDownwardIcon />}>
				<CardHeader
					avatar={<MenuBookIcon fontSize='large' />}
					title='Education'
					style={{
						padding: "0",
					}}
				/>
			</MuiAccordionSummary>
			<Divider />
			{Array.from({ length: panelCount }).map((_, i) => (
				<MuiAccordion
					style={{
						padding: "0 1em",
						marginTop: "1em",
						backgroundColor: "#C4DDFD",
					}}
					//@ts-ignore
					onChange={handleAccordion(i)}
					expanded={expanded === i}
				>
					<MuiAccordionSummary>
						<CardHeader
							title={`Education#${i + 1}`}
							style={{
								padding: "0",
							}}
							subheader={`${
								values[
									`submission{${
										126 + (i === 1 ? 10 : 0)
									}}{day}`
								]
							}/${
								values[
									`submission{${
										126 + (i === 1 ? 10 : 0)
									}}{month}`
								]
							}/${
								values[
									`submission{${
										126 + (i === 1 ? 10 : 0)
									}}{year}`
								]
							} - ${
								values[
									`submission{${
										127 + (i === 1 ? 10 : 0)
									}}{day}`
								]
							}/${
								values[
									`submission{${
										127 + (i === 1 ? 10 : 0)
									}}{month}`
								]
							}/${
								values[
									`submission{${
										127 + (i === 1 ? 10 : 0)
									}}{year}`
								]
							}`}
						/>
					</MuiAccordionSummary>
					{educationFields[i].map(
						({ name, label, type, style, helperText }: Fields) => (
							<TextField
								key={name}
								onChange={e => {
									saveRecords(e);
									handleChange(e);
								}}
								name={name}
								label={label}
								type={type ?? "string"}
								style={style ?? null}
								value={values[name]}
								helperText={helperText ?? ""}
							/>
						)
					)}
					<Divider />
				</MuiAccordion>
			))}
			<Button
				fullWidth
				style={{
					backgroundColor: "#C4DDFD",
					margin: "1em 0",
				}}
				onClick={handleClick}
				disabled={panelCount === 2}
			>
				<AddCircleOutlineIcon
					style={{
						marginRight: "0.3em",
					}}
					fontSize='small'
				/>
				Add another education
			</Button>
		</MuiAccordion>
	);
};

export default Profile;
