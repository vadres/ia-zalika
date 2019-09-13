import { combineReducers } from 'redux'; 
import StatsReducer from '../store/ducks/stats/reducers';

const rootReducer = combineReducers({
    teams: StatsReducer
}) 

export default rootReducer