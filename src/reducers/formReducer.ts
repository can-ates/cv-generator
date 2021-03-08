import { FORM } from "../constants";

let initalState = {
	formSubmitting: false,
	submitSuccessful: false,
	submitFailed: false,
	formData: {},
};

const formReducer = (state = initalState, action: any) => {
	switch (action.type) {
		case FORM.SUBMIT:
			return {
				...state,
				formData: action.payload,
				formSubmitting: true,
				submitLoading: true,
			};
		case FORM.SUBMIT_SUCCESSFUL:
			return {
				...state,
				submitSuccessful: true,
				formSubmitting: false,
			};
		case FORM.SUBMIT_FAILED:
			return {
				...state,
				submitFailed: true,
				formSubmitting: false,
			};
		default:
			return state;
	}
};

export default formReducer;
