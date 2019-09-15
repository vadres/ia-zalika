import { connect } from 'react-redux';

import { Creators } from '../../store/ducks/clashes/reducers';
import ClashesComponent from './ClashesComponent';
import { onlyNumber } from '../../services/format';

const mapStateToProps = (state) => ({
  ...state.clashes
});

const mapDispatchToProps = (dispatch) => {
  const fetchTeams = () => {
    dispatch(Creators.statsRequestTeams());
  };

  const changeAttr = (attr, value) => {
    if (attr !== 'visitor' && attr !== 'client')
      value = onlyNumber(value);

    dispatch(Creators.changeAttr(attr, value));
  };
  
  const resetState = () => {
    dispatch(Creators.resetState());
  };

  const saveClash = () => {
    dispatch(Creators.saveClash());
  };

  return { fetchTeams, changeAttr, resetState, saveClash };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClashesComponent);