import { put, call, takeEvery, select, takeLatest } from "redux-saga/effects";

import { TEMPLATE, PHASE } from "../constants";
import { resetForm, downloadSuccessful, downloadFailed } from "../actions";
import { downloadPDF } from "../api";

export function* handleSelect(): any {
	const { template } = yield select();
	
	if (template.reportId === "") {
		yield put({
			type: PHASE.PREVIOUS,
		});
	} else {
		//PASSING FORM PAGE
		yield put({
			type: PHASE.NEXT,
		});
	}
}

export function* handleDownload(): any {
	const state = yield select();
	
	const formInfo = {
		firstName: state.form.formData["submission[4][first]"],
		lastName: state.form.formData["submission[4][last]"],
		reportId: state.template.reportId,
		submissionId: state.template.submissionId,
	};

	try {
		yield call(downloadPDF, formInfo);
		yield put(downloadSuccessful());
		yield put(resetForm())
		yield put({
			type: PHASE.PREVIOUS
		})
	} catch (e) {
		yield put(downloadFailed());
	}
}

export default function* watchTemplates() {
	yield takeLatest(TEMPLATE.SELECT, handleSelect);
	yield takeEvery(TEMPLATE.DOWNLOAD, handleDownload);
}
