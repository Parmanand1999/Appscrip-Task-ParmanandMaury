import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  countData:0,
  filtertoggleModal:true
}

export const counterSlice = createSlice({
  name: 'CountData',
  initialState,
  reducers: {
    addCount: (state,action) => {
        state.countData=action.payload
    },
    filtertoggle:(state)=>{
        state.filtertoggleModal = !state.filtertoggleModal;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addCount,filtertoggle } = counterSlice.actions

export default counterSlice.reducer