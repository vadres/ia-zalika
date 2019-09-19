import { combineReducers } from 'redux'; 
import StatsReducer from '../store/ducks/stats/reducers';
import StatsEditReducer from '../store/ducks/statsEdit/reducers';
import ClashesReducer from '../store/ducks/clashes/reducers';

const rootReducer = combineReducers({
    stats: StatsReducer,
    statsEdit: StatsEditReducer,
    clashes: ClashesReducer
}) 

export default rootReducer