import jwtDecode from "jwt-decode";
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: localStorage.getItem("access_token"),
  username: null,
  email: null,
  id: null,
};

export const authSlice = createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {
        load_user: (state, action) => {
        const user = jwtDecode(action.payload); 
        console.log(user)
        state.username = user.name;
        state.email = user.email;
        state.id = user.user_id;
      },
    },
  })
  
export const {load_user} = authSlice.actions


export const selectCount = (state) => state.counter.value

export default authSlice.reducer
  

// const authReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "SIGN_IN":
//     case "SIGN_UP":
//     case "USER_LOADED":
//       const user = jwtDecode(action.token); 
//       return {
//         ...initialState,
//         token: action.token,
//         username: user.name,
//         email: user.email,
//         id: user.id,
//       };
//     case "SIGN_OUT":
//       localStorage.removeItem("token");
//       return {
//         token: null,
//         name: null,
//         email: null,
//         _id: null,
//       };
//     default:
//       return state;
//   }
// };

// export default authReducer;