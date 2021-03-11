interface formInfo {
	firstName: string;
	lastName: string;
	reportId: string;
	submissionId: string;
}

const PDF_URL = "https://api.jotform.com/generatePDF";

const downloadPDF = async (formInfo: formInfo) => {
	//GENERATE PDF
	const response = await fetch(
		`${PDF_URL}?type=PDFv2&formid=210605532361041&reportid=${formInfo.reportId}&submissionid=${formInfo.submissionId}&apikey=${process.env.REACT_APP_API_KEY}&username=canates.dev&useNew=1`
	);
	const data = await response.json();

	if (data) {
		//DOWNLOAD PDF
		if (formInfo.reportId === "10210605129192045") {
			window.location.href = `https://files.jotform.com/jotformpdfs/canates.dev/210605532361041/${formInfo.submissionId}/${formInfo.submissionId}.pdf?ufs=jotformpdfs`;
		} else {
			window.location.href = `https://files.jotform.com/jotformpdfs/canates.dev/210605532361041/${
				formInfo.submissionId
			}/${encodeURIComponent(
				formInfo.firstName.trimStart().trimEnd().replace(/ +/g, "-")
			)}-${encodeURIComponent(
				formInfo.lastName.trimStart().trimEnd().replace(/ +/g, "-").trim()
			)}.pdf?ufs=jotformpdfs`;
		}
	}

	//`https://files.jotform.com/jotformpdfs/canates.dev/210605532361041/${formInfo.submissionId}/${formInfo.firstName}-${formInfo.lastName}.pdf`;
	// const data2 = await fetch(`${DOWNLOAD_URL}/${formInfo.reportId}/${formInfo.reportId}.pdf?ufs=jotformpdfs?apikey=${process.env.REACT_APP_API_KEY}`)
	// const data2 = await fetch('https://files.jotform.com/jotformpdfs/canates.dev/210605532361041/4909553660717815299/4909553660717815299.pdf?md5=dMdRKW77tWYWnumonQnghg&expires=1615146414')
	// const data2 = await fetch('https://api.jotform.com/uploads/canates.dev/210605532361041/4909553660717815299/4909553660717815299.pdf?ufs=jotformpdfs')
	return data;
};

const SUBMIT_URL = "https://api.jotform.com/form/210605532361041";

const submitForm = async (formData: any) => {
	let values = new FormData();
	for (let dt of Object.keys(formData)) {
		values.append(dt, formData[dt]);
	}

	const response = await fetch(
		`${SUBMIT_URL}/submissions?apikey=${process.env.REACT_APP_API_KEY}`,
		{
			method: "POST",

			body: values,
		}
	);

	const data = await response.json();

	return data;
};

export { downloadPDF, submitForm };
