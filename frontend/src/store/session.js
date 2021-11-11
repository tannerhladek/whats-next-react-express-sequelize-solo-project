import { csrfFetch } from "./csrf";

// ACTION TYPE CONSTS
const SET_USER = 'session/SET_USER';
const REMOVE_USER = 'session/REMOVE_USER';
const SET_USER_ACTIVITIES = 'session/SET_USER_ACTIVITIES'

// ACTION CREATORS
const setUser = (user) => ({
   type: SET_USER,
   user
})

const removeUser = () => ({
   type: REMOVE_USER
})

const setUserActivities = (activities) => ({
   type: SET_USER_ACTIVITIES,
   activities
})

// THUNK CREATORS
// sign up
export const signUp = (user) => async (dispatch) => {
   const { firstName, lastName, username, email, password } = user;
   const res = await csrfFetch('api/users', {
      method: 'POST',
      body: JSON.stringify({
         firstName,
         lastName,
         username,
         email,
         password
      })
   });
   const data = await res.json();
   dispatch(setUser(data.user))
};

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

// log out
export const logout = () => async (dispatch) => {
   const res = await csrfFetch('/api/session', {
      method: "DELETE"
   })
   const data = await res.json()
   if (data.message === 'success') {
      return dispatch(removeUser())
   }
}

// restore user
export const restoreUser = () => async (dispatch) => {
   const res = await csrfFetch('/api/session')
   const data = await res.json()
   dispatch(setUser(data.user));
};

// get user's activities
export const getUserActivities = (userId) => async (dispatch) => {
   const res = await csrfFetch(`/api/users/${userId}/activities`);
   const data = await res.json();
   dispatch(setUserActivities(data.activities))
}


//INITIAL STATE
const initialState = {
   user: null,
   userActivities: {}
};

// REDUCER
const sessionReducer = (state = initialState, action) => {
   let newState = {};
   switch (action.type) {
      case SET_USER:
         newState = { ...state };
         newState.user = action.user;
         return newState;

      case REMOVE_USER:
         newState = { ...state };
         newState.user = null;
         newState.userActivities = null;
         return newState;

      case SET_USER_ACTIVITIES:
         newState = { ...state };
         console.log(action.activities);
         console.log(newState);
         action.activities.forEach(activity => {
            console.log(newState.userActivities);
            newState.userActivities[activity.id] = activity
         });
         return newState;

      default:
         return state;
   }
};

export default sessionReducer;
