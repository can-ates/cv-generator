import { put, call, takeEvery, select } from "redux-saga/effects";

import { TEMPLATE, PHASE } from "../constants";
import {downloadSuccessful, downloadFailed} from '../actions'
import {downloadPDF} from '../api'

export function* handleSelect() {

    //PASSING FORM PAGE
	yield put({
		type: PHASE.NEXT,
	});
}

export function* handleDownload(): any{
	const state = yield select()
	const ids = {
		formId: state.template.formId,
		reportId: state.template.reportId,
		submissionId: state.template.submissionId
	}

	try {
		yield call(downloadPDF, ids)
		yield put(downloadSuccessful())
	} catch(e) {
		yield put(downloadFailed())
	}
	
}

export default function* watchTemplates() {
	yield takeEvery(TEMPLATE.SELECT, handleSelect);
	yield takeEvery(TEMPLATE.DOWNLOAD, handleDownload)
}
