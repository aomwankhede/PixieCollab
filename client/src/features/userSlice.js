import {createSlice,nanoid} from '@reduxjs/toolkit';
const initialState = {
    currUser : 'Aom',
    streak : 0,
    isEditor : true,
}
const userSlice = createSlice({
    name:"currUser",
    initialState,
    reducers:{
      setCurrUser:(state)=>{
        //API call
        return state;
      },
      setIsEditor:(state,action)=>{
        return {...state, isEditor:action.payload}
      },
      increase:(state,action)=>{
        const diff = action.payload
        return {...state, streak:state.streak+diff}
      },
      decrease:(state)=>{
        return {...state, streak:state.streak-1}
      },
    }
})

export const {setCurrUser,setIsEditor,increase,decrease} = userSlice.actions; 
export default userSlice.reducer;   


