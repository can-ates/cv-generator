import {all} from 'redux-saga/effects'

import templateSaga from './templateSaga'
import formSaga from './formSaga'

export default function* rootSaga() {
    yield all([
        formSaga(),
        templateSaga()
    ])
}