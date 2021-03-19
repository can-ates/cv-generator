import * as Yup from "yup";

export const formSchema = Yup.object({});

export const formValues = {
	"submission{4}{first}": localStorage.getItem("submission{4}{first}") ?? "", //firstName
	"submission{4}{last}": localStorage.getItem("submission{4}{last}") ?? "", //lastName
	"submission{5}": localStorage.getItem("submission{5}") ?? "", //Email
	"submission{6}{area}": localStorage.getItem("submission{6}{area}") ?? "", //AreaNumber
	"submission{6}{phone}": localStorage.getItem("submission{6}{phone}") ?? "", //PhoneNumber
	"submission{28}": localStorage.getItem("submission{28}") ?? "", //profile
	"submission{129}": localStorage.getItem("submission{129}") ?? "", //role
	"submission{130}": localStorage.getItem("submission{130}") ?? "", //website
	"submission{34}": localStorage.getItem("submission{34}") ?? "", //nameOf School
	"submission{39}": localStorage.getItem("submission{39}") ?? "", //fieldOf ''
	"submission{40}": localStorage.getItem("submission{40}") ?? "", //typeofDegree ''
	"submission{125}": localStorage.getItem("submission{125}") ?? "", //city
	"submission{126}{day}": localStorage.getItem("submission{126}{day}") ?? "", //starting
	"submission{126}{month}":
		localStorage.getItem("submission{126}{month}") ?? "",
	"submission{126}{year}":
		localStorage.getItem("submission{126}{year}") ?? "",
	"submission{127}{day}": localStorage.getItem("submission{127}{day}") ?? "", //ending
	"submission{127}{month}":
		localStorage.getItem("submission{127}{month}") ?? "",
	"submission{127}{year}":
		localStorage.getItem("submission{127}{year}") ?? "",
	"submission{132}": localStorage.getItem("submission{132}") ?? "", //nameOf School
	"submission{133}": localStorage.getItem("submission{133}") ?? "", //fieldOf ''
	"submission{134}": localStorage.getItem("submission{134}") ?? "", //typeofDegree ''
	"submission{135}": localStorage.getItem("submission{135}") ?? "", //city
	"submission{136}{day}": localStorage.getItem("submission{136}{day}") ?? "", //starting
	"submission{136}{month}":
		localStorage.getItem("submission{136}{month}") ?? "",
	"submission{136}{year}":
		localStorage.getItem("submission{136}{year}") ?? "",
	"submission{137}{day}": localStorage.getItem("submission{137}{day}") ?? "", //ending
	"submission{137}{month}":
		localStorage.getItem("submission{137}{month}") ?? "",
	"submission{137}{year}":
		localStorage.getItem("submission{137}{year}") ?? "",
	"submission{124}": localStorage.getItem("submission{124}") ?? "", //skills
	"submission{77}": localStorage.getItem("submission{77}") ?? "", //jobTitle
	"submission{79}": localStorage.getItem("submission{79}") ?? "", //company
	"submission{82}{day}": localStorage.getItem("submission{82}{day}") ?? "", //starting
	"submission{82}{month}":
		localStorage.getItem("submission{82}{month}") ?? "",
	"submission{82}{year}": localStorage.getItem("submission{82}{year}") ?? "",
	"submission{83}{day}": localStorage.getItem("submission{83}{day}") ?? "", //ending
	"submission{83}{month}":
		localStorage.getItem("submission{83}{month}") ?? "",
	"submission{83}{year}": localStorage.getItem("submission{83}{year}") ?? "",
	"submission{85}": localStorage.getItem("submission{85}") ?? "", //duties
	"submission{128}": localStorage.getItem("submission{128}") ?? "", //city
	"submission{131}": localStorage.getItem("submission{131}") ?? "", //jobTitle
	"submission{138}": localStorage.getItem("submission{138}") ?? "", //company
	"submission{139}{day}": localStorage.getItem("submission{139}{day}") ?? "", //starting
	"submission{139}{month}":
		localStorage.getItem("submission{139}{month}") ?? "",
	"submission{139}{year}": localStorage.getItem("submission{139}{year}") ?? "",
	"submission{140}{day}": localStorage.getItem("submission{140}{day}") ?? "", //ending
	"submission{140}{month}":
		localStorage.getItem("submission{140}{month}") ?? "",
	"submission{140}{year}": localStorage.getItem("submission{140}{year}") ?? "",
	"submission{141}": localStorage.getItem("submission{141}") ?? "", //duties
	"submission{142}": localStorage.getItem("submission{142}") ?? "", //city
};

export const profileFields = [
	{
		name: "submission{4}{first}",
		label: "Name",
	},
	{
		name: "submission{4}{last}",
		label: "Surname",
	},
	{
		name: "submission{5}",
		label: "Email",
	},
	{
		name: "submission{6}{area}",
		label: "Area",
		type: "tel",
		style: {
			maxWidth: "35px",
		},
	},
	{
		name: "submission{6}{phone}",
		label: "Phone",
		type: "tel",
		style: {
			maxWidth: "100px",
		},
	},
	{
		name: "submission{130}",
		label: "Website",
		type: "url",
	},
	{
		name: "submission{129}",
		label: "Applied Position",
	},
	{
		name: "submission{28}",
		label: "Profile",
		props: {
			fullWidth: true,
			multiline: true,
			rows: 3,
			rowsMax: 6,
		},
		variant: "outlined",
	},
];

export const educationFields = [
	[
		{
			name: "submission{34}",
			label: "Name of The School",
		},
		{
			name: "submission{39}",
			label: "Field of Study",
		},
		{
			name: "submission{40}",
			label: "Type of Degree",
		},
		{
			name: "submission{125}",
			label: "City",
			style: {
				maxWidth: "140px",
			},
		},
		{
			name: "submission{126}{day}",
			label: "DD",
			type: "number",
			style: {
				maxWidth: "35px",
			},
			helperText: "Start Date",
		},
		{
			name: "submission{126}{month}",
			label: "MM",
			type: "number",
			style: {
				maxWidth: "35px",
			},
		},
		{
			name: "submission{126}{year}",
			label: "DD",
			type: "number",
			style: {
				maxWidth: "50px",
			},
		},
		{
			name: "submission{127}{day}",
			label: "DD",
			type: "number",
			style: {
				maxWidth: "35px",
			},
			helperText: "End Date",
		},
		{
			name: "submission{127}{month}",
			label: "MM",
			type: "number",
			style: {
				maxWidth: "35px",
			},
		},
		{
			name: "submission{127}{year}",
			label: "DD",
			type: "number",
			style: {
				maxWidth: "50px",
			},
		},
	],
	[
		{
			name: "submission{132}",
			label: "Name of The School",
		},
		{
			name: "submission{133}",
			label: "Field of Study",
		},
		{
			name: "submission{134}",
			label: "Type of Degree",
		},
		{
			name: "submission{135}",
			label: "City",
			style: {
				maxWidth: "140px",
			},
		},
		{
			name: "submission{136}{day}",
			label: "DD",
			type: "number",
			style: {
				maxWidth: "35px",
			},
			helperText: "Start Date",
		},
		{
			name: "submission{136}{month}",
			label: "MM",
			type: "number",
			style: {
				maxWidth: "35px",
			},
		},
		{
			name: "submission{136}{year}",
			label: "DD",
			type: "number",
			style: {
				maxWidth: "50px",
			},
		},
		{
			name: "submission{137}{day}",
			label: "DD",
			type: "number",
			style: {
				maxWidth: "35px",
			},
			helperText: "End Date",
		},
		{
			name: "submission{137}{month}",
			label: "MM",
			type: "number",
			style: {
				maxWidth: "35px",
			},
		},
		{
			name: "submission{137}{year}",
			label: "DD",
			type: "number",
			style: {
				maxWidth: "50px",
			},
		},
	],
];

export const skillsFields = [
	{
		name: "submission{124}",
		label: "Skills and Occupations",
		style: {
			marginTop: "1em",
		},
		props: {
			fullWidth: true,
			multiline: true,
			rowsMax: 7,
			rows: 4,
		},
		variant: "outlined",
	},
];

export const workExperienceFields = [
	[
		{
			name: "submission{79}",
			label: "Company",
		},
		{
			name: "submission{77}",
			label: "Job Title",
		},
		{
			name: "submission{128}",
			label: "City",
		},
		{
			name: "submission{82}{day}",
			label: "DD",
			type: "number",
			style: {
				maxWidth: "35px",
			},
			helperText: "Start Date",
		},
		{
			name: "submission{82}{month}",
			label: "MM",
			type: "number",
			style: {
				maxWidth: "35px",
			},
		},
		{
			name: "submission{82}{year}",
			label: "YY",
			type: "number",
			style: {
				maxWidth: "50px",
			},
		},
		{
			name: "submission{83}{day}",
			label: "DD",
			type: "number",
			style: {
				maxWidth: "35px",
			},
			helperText: "End Date",
		},
		{
			name: "submission{83}{month}",
			label: "MM",
			type: "number",
			style: {
				maxWidth: "35px",
			},
		},
		{
			name: "submission{83}{year}",
			label: "YY",
			type: "number",
			style: {
				maxWidth: "50px",
			},
			
		},
		{
			name: "submission{85}",
			label: "Description of Duties",
			variant: "outlined",
			props: {
				fullWidth: true,
				multiline: true,
				rowsMax: 7,
				rows: 4,
			},
		},
	],
	[
		{
			name: "submission{138}",
			label: "Company",
		},
		{
			name: "submission{131}",
			label: "Job Title",
		},
		{
			name: "submission{142}",
			label: "City",
		},
		{
			name: "submission{139}{day}",
			label: "DD",
			type: "number",
			style: {
				maxWidth: "35px",
			},
			helperText: "Start Date",
		},
		{
			name: "submission{139}{month}",
			label: "MM",
			type: "number",
			style: {
				maxWidth: "35px",
			},
		},
		{
			name: "submission{139}{year}",
			label: "YY",
			type: "number",
			style: {
				maxWidth: "50px",
			},
		},
		{
			name: "submission{140}{day}",
			label: "DD",
			type: "number",
			style: {
				maxWidth: "35px",
			},
			helperText: "End Date",
		},
		{
			name: "submission{140}{month}",
			label: "MM",
			type: "number",
			style: {
				maxWidth: "35px",
			},
		},
		{
			name: "submission{140}{year}",
			label: "YY",
			type: "number",
			style: {
				maxWidth: "50px",
			},
		},
		{
			name: "submission{141}",
			label: "Description of Duties",
			variant: "outlined",
			props: {
				fullWidth: true,
				multiline: true,
				rowsMax: 7,
				rows: 4,
			},
		},
	],
];
