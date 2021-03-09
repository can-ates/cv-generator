import React from "react";
import Template from "./Template";

import Template1 from "../images/Template1.png";
import Template2 from "../images/Template2.png";

import Grid from "@material-ui/core/Grid";

const templates = [
	{
		formId: "210605532361041",
		reportId: "10210605129192045",
		img: Template1,
	},
	{
		formId: "210605532361041",
		reportId: "10210605735661049",
		img: Template2,
	},
];

//https://api.jotform.com/generatePDF?type=PDFv2&formid=210605532361041
//&reportid=10210605129192045&submissionid=4905330323413641884&username=canates.dev&useNew=1

const Templates: React.FunctionComponent = () => {
	return (
		<Grid container direction='row' spacing={5}>
			{templates.map(template => {
				return (
					<Grid item key={template.img} >
						<Template
							img={template.img}
							formId={template.formId}
							reportId={template.reportId}
						/>
					</Grid>
				);
			})}
		</Grid>
	);
};

export default Templates;
