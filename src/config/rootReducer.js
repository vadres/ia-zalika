import { combineReducers } from 'redux'; 
import StatsReducer from '../store/ducks/stats/reducers';
import ClashesReducer from '../store/ducks/clashes/reducers';

const rootReducer = combineReducers({
    stats: StatsReducer,
    clashes: ClashesReducer
}) 

export default rootReducer