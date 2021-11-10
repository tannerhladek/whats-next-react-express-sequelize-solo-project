import { csrfFetch } from "./csrf";

// ACTION TYPES CONST DECLARATIONS
const LOAD_ALL = 'activities/LOAD_ALL';
const LOAD_ONE = 'activities/LOAD_ONE';


// ACTION CREATORS
// load all activities
const loadActivities = (activities) => ({
   type: LOAD_ALL,
   activities
});

// load one activity
const loadOneActivity = (activity) => ({
   type: LOAD_ONE,
   activity
})


// DEFINE THUNK CREATORS
// get all activities
export const getAllActivities = () => async (dispatch) => {
   const res = await csrfFetch('/api/activities');
   const data = await res.json();
   dispatch(loadActivities(data.activities));
};

// get single activity by id
export const getOneActivity = (activityId) => async (dispatch) => {
   const res = await csrfFetch(`/api/activities/${activityId}`);
   const data = await res.json();
   dispatch(loadOneActivity(data.activity))
};

// create an activity
export const createActivity = (payload) => async (dispatch) => {
   const res = await csrfFetch(`/api/activities`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
   });
   const data = await res.json();

   console.log('--------------')
   console.log(data)
   console.log('--------------')
};


// Define an initial state
const initialState = {};

// Define a reducer
const activitiesReducer = (state = initialState, action) => {
   let newState = {};
   switch (action.type) {
      case LOAD_ALL:
         newState = { ...state };
         action.activities.forEach(activity => {
            newState[activity.id] = activity
         });
         return newState;
      case LOAD_ONE:
         newState = { ...state };
         newState[action.activity.id] = action.activity;
         return newState;
      default:
         return state
   }
}


export default activitiesReducer;



// window.store.dispatch(window.activityActions.createActivity({
//    name: "Test",
//       description: "Testing this out",
//       address: "123 Test",
//       city: "Test City",
//       state: "CA",
//       country: "USA",
//       url: 'https://cdn.pixabay.com/photo/2014/06/03/19/38/road-sign-361514_640.png'
// }))
