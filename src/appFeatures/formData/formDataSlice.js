import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    formData : []
}

const formDataSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setFormData: (state, action) => {
            state.formData.push(action.payload)
        }
    }
});

export const { setFormData } = formDataSlice.actions

export const getFormData = state => state.form.formData

export default formDataSlice.reducer