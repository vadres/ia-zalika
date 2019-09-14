import { combineReducers } from 'redux'; 
import StatsReducer from '../store/ducks/stats/reducers';

const rootReducer = combineReducers({
    stats: StatsReducer
}) 

export default rootReducer