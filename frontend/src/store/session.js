import { csrfFetch } from "./csrf";

// ACTION TYPE CONSTS
const SET_USER = 'session/SET_USER';
const REMOVE_USER = 'session/REMOVE_USER'

// ACTION CREATORS
const setUser = (user) => ({
   type: SET_USER,
   user
})

const removeUser = () => ({
   type: REMOVE_USER
})

// THUNK CREATORS
// login
export const login = (user) => async (dispatch) => {
   const { credential, password } = user;
   const response = await csrfFetch('/api/session', {
      method: 'POST',
      body: JSON.stringify({
         credential,
         password,
      }),
   });
   const data = await response.json();
   dispatch(setUser(data.user));
};

// restore user
export const restoreUser = () => async (dispatch) => {
   const response = await csrfFetch('/api/session')
   const data = await response.json()
   dispatch(setUser(data.user));
}


//INITIAL STATE
const initialState = {
   user: null
};

// REDUCER
const sessionReducer = (state = initialState, action) => {
   let newState = {};
   switch (action.type) {
      case (SET_USER):
         newState = { ...state };
         newState.user = action.user;
         return newState;

      case (REMOVE_USER):
         newState = {...state};
         newState.user = null;
         return

      default:
         return state;
   }
};

export default sessionReducer;
