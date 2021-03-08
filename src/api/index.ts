interface IDS {
	formId: string;
	reportId: string;
	submissionId: string;
}

const PDF_URL = "https://api.jotform.com/generatePDF";
const DOWNLOAD_URL = "https://api.jotform.com/uploads/canates.dev/210605532361041"

const downloadPDF = async (ids: IDS) => {
	//GENERATE PDF
	const response = await fetch(
		`${PDF_URL}?type=PDFv2&formid=${ids.formId}&reportid=${ids.reportId}&submissionid=${ids.submissionId}&apikey=${process.env.REACT_APP_API_KEY}&username=canates.dev&useNew=1`
	);
	const data = await response.json();

	// eslint-disable-next-line no-restricted-globals
	window.location = data.content
	//DOWNLOAD PDF
	// const data2 = await fetch(`${DOWNLOAD_URL}/${ids.reportId}/${ids.reportId}.pdf?ufs=jotformpdfs?apikey=${process.env.REACT_APP_API_KEY}`)
	// const data2 = await fetch('https://files.jotform.com/jotformpdfs/canates.dev/210605532361041/4909553660717815299/4909553660717815299.pdf?md5=dMdRKW77tWYWnumonQnghg&expires=1615146414')
	// const data2 = await fetch('https://api.jotform.com/uploads/canates.dev/210605532361041/4909553660717815299/4909553660717815299.pdf?ufs=jotformpdfs')
	return data;
};

const SUBMIT_URL = "https://api.jotform.com/form/210605532361041";

const submitForm = async (formData: any) => {
	let values = new FormData()
	for(let dt of Object.keys(formData)){
		values.append(dt, formData[dt])
	}

	const response = await fetch(`${SUBMIT_URL}/submissions?apikey=${process.env.REACT_APP_API_KEY}`, {
		method: "POST",

		//@ts-ignore
		body: values,
		
	})

    const data = await response.json()

    return data
};

export { downloadPDF, submitForm };
