import {createSlice} from '@reduxjs/toolkit'

export const employeeSlice = createSlice({
    name: 'employee',
    initialState: {},
    reducers: {
        employeeDetail: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {employeeDetail} = employeeSlice.actions
export default employeeSlice.reducer