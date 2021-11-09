import { csrfFetch } from "./csrf";

// ACTION TYPES CONST DECLARATIONS
const LOAD_ACTIVITIES = 'activities/LOAD_ACTIVITIES'


// ACTION CREATORS
const loadActivities = (activities) => ({
   type: LOAD_ACTIVITIES,
   activities
});


// DEFINE THUNK CREATORS
export const getActivities = () => async (dispatch) => {
   const res = await csrfFetch('/api/activities');
   const data = await res.json();
   dispatch(loadActivities(data.activities));
};

// Define an initial state
const initialState = {};

// Define a reducer
const activitiesReducer = (state = initialState, action) => {
   let newState = {};
   switch (action.type) {
      case LOAD_ACTIVITIES:
         newState = {...state};
         action.activities.forEach(activity => {
            newState[activity.id] = activity
         });
         return newState;
      default:
         return state
   }
}


export default activitiesReducer;
