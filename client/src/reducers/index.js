import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';


//Define the properties of our Application State here
const rootReducer = combineReducers({
	form
});

export default rootReducer;