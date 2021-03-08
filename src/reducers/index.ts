import {combineReducers} from 'redux'

import template from './templateReducer'
import phase from './phaseReducer'
import form from './formReducer'

const rootReducer = combineReducers({
    template,
    phase,
    form
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>