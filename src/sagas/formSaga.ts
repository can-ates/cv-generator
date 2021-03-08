import { put, call, takeLatest, select } from "redux-saga/effects";

import {submitForm} from '../api'
import {submitSuccessful, submitFailed, downloadTemplate} from '../actions'
import { FORM } from "../constants";

export function* handleSubmit(): any {
    const state = yield select()
    const formData = state.form.formData

    try {
        const data = yield call(submitForm, formData)
        yield put(submitSuccessful())
        yield put(downloadTemplate(data.content.submissionID))
    } catch(err) {
        yield put(submitFailed())
    }
	
}

export default function* watchForm() {
	yield takeLatest(FORM.SUBMIT, handleSubmit);
}
