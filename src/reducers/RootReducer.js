import { combineReducers } from 'redux';


function SampleReducer(state = null, action) {
    return state;
}

const RootReducer = combineReducers({
    sample: SampleReducer,
    
})

export default RootReducer;

