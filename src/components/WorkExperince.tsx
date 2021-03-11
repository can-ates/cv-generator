import React, { useState } from "react";

import { workExperienceFields } from "../helpers";

import WorkIcon from "@material-ui/icons/Work";
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
	type?: string;
	variant?: string;
	props?: any;
	helperText?: string;
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
		setExpanded(1);
	};
	return (
		<MuiAccordion className={containerClassName}>
			<MuiAccordionSummary expandIcon={<ArrowDownwardIcon />}>
				<CardHeader
					avatar={<WorkIcon fontSize='large' />}
					title='Work Experince'
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
							title={`WorkExperience#${i + 1}`}
							style={{
								padding: "0",
							}}
							subheader={`${
								values[
									`submission{${
										82 + (i === 1 ? 57 : 0)
									}}{day}`
								]
							}/${
								values[
									`submission{${
										82 + (i === 1 ? 57 : 0)
									}}{month}`
								]
							}/${
								values[
									`submission{${
										82 + (i === 1 ? 57 : 0)
									}}{year}`
								]
							} - ${
								values[
									`submission{${
										83 + (i === 1 ? 57 : 0)
									}}{day}`
								]
							}/${
								values[
									`submission{${
										83 + (i === 1 ? 57 : 0)
									}}{month}`
								]
							}/${
								values[
									`submission{${
										83 + (i === 1 ? 57 : 0)
									}}{year}`
								]
							}`}
						/>
					</MuiAccordionSummary>
					{workExperienceFields[i].map(
						({
							name,
							label,
							type,
							style,
							helperText,
							variant,
							props,
						}: Fields) => (
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
				Add another work experience
			</Button>
		</MuiAccordion>
	);
};

export default Profile;
