import {TEMPLATE, PHASE, FORM} from '../constants'

type formInfo = {
    formId: string;
    reportId: string;
}

type fieldType = {
    fieldName: string;
    fieldValue: string;
}

//FORM
const changeHandler = (field: fieldType) => ({
    type: FORM.ONCHANGE,
    payload: field
})

const submitForm = (formData: any) => ({
    type: FORM.SUBMIT,
    payload: formData
})

const submitSuccessful = () => ({
    type: FORM.SUBMIT_SUCCESSFUL
})

const submitFailed = () => ({
    type: FORM.SUBMIT_FAILED
})

//TEMPLATE
const setTemplate = (formInfo: formInfo) => ({
    type: TEMPLATE.SELECT,
    payload: formInfo
})

const downloadTemplate = (subId: string) => ({
    type: TEMPLATE.DOWNLOAD,
    payload: subId
})

const downloadSuccessful = () => ({
    type: TEMPLATE.DOWNLOAD_SUCCESSFUL
})

const downloadFailed = () => ({
    type: TEMPLATE.DOWNLOAD_FAILED
})

export {setTemplate, changeHandler, submitForm, submitSuccessful, submitFailed, downloadTemplate, downloadSuccessful,downloadFailed}