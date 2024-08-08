import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  countData:0,
}

export const counterSlice = createSlice({
  name: 'CountData',
  initialState,
  reducers: {
    addCount: (state,action) => {
     console.log(action,"state");
     
        state.countData=action.payload
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { addCount } = counterSlice.actions

export default counterSlice.reducer