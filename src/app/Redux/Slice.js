import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  countData:0,
  toggleModal:(true)
}

export const counterSlice = createSlice({
  name: 'CountData',
  initialState,
  reducers: {
    addCount: (state,action) => {
        state.countData=action.payload
    },
    toggleModal:(state)=>{
        state.toggleModal = !state.toggleModal;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addCount,toggleModal } = counterSlice.actions

export default counterSlice.reducer