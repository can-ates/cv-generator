import { TEMPLATE } from "../constants";

let initalState = {
	formId: "",
	reportId: "",
	submissionId: "",
	isDownloading: false,
	downloadSuccessful: false,
	downloadFailed: false,
};

const templateReducer = (state = initalState, action: any) => {
	switch (action.type) {
		case TEMPLATE.SELECT:
			return {
				...state,
				formId: action.payload.formId,
				reportId: action.payload.reportId,
			};
		case TEMPLATE.DOWNLOAD:
			return {
				...state,
				isDownloading: true,
				submissionId: action.payload,
			};
		case TEMPLATE.DOWNLOAD_SUCCESSFUL:
			return {
				...state,
				downloadSuccessful: true,
				isDownloading: false,
			};
		case TEMPLATE.DOWNLOAD_FAILED:
			return {
				...state,
				downloadFailed: true,
				isDownloading: false,
			};

		default:
			return state;
	}
};

export default templateReducer;
