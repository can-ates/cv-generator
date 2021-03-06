import React from "react";
import Template from "./Template";

import Template1 from "../images/Template1.png";
import Template2 from "../images/Template2.png";
import Template3 from "../images/Template3.png";
import Template4 from "../images/Template4.png";
import Template5 from "../images/Template5.png";

import Grid from "@material-ui/core/Grid";

const templates = [
	{
		reportId: "10210605129192045",
		img: Template1,
	},
	{
		reportId: "10210605735661049",
		img: Template2,
	},
	{
		reportId: '10210701398941052',
		img: Template3
	},
	{
		reportId: '10210705264996058',
		img: Template4
	},
	{
		reportId: '10210706283850049',
		img: Template5
	}
	
];

//https://api.jotform.com/generatePDF?type=PDFv2&formid=210605532361041
//&reportid=10210605129192045&submissionid=4905330323413641884&username=canates.dev&useNew=1

const Templates: React.FunctionComponent = () => {
	return (
		<Grid container direction='row' justify='space-evenly' spacing={5} >
			{templates.map(template => {
				return (
					<Grid item key={template.img}>
						<Template
							img={template.img}
							reportId={template.reportId}
						/>
					</Grid>
				);
			})}
		</Grid>
	);
};

export default Templates;
