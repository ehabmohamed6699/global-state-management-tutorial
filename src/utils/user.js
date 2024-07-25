import { createSlice } from "@reduxjs/toolkit";

const initialState = {name:"", email:"", age:0, loggedIn: false}

const slice = createSlice({
    name:"user",
    initialState:{value:initialState},
    reducers:{
        login: (state, action) => {
            state.value = {...action.payload, loggedIn: true};
        },
        changeUserName: (state, action) =>{
            if(state.value.loggedIn){
                state.value = {...state.value, name: action.payload};
            }
        },
        logout: (state) =>{
            state.value = initialState
        }
    }
})

export const {login, changeUserName, logout} = slice.actions;
export default slice.reducer;