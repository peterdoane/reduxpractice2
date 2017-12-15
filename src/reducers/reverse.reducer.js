import * as types from '../constants/reverse.const';

export default (state = '', action ) => {
  switch(action.type) {
    case types.STRING:
      return action.payload;
    default:
      return state;
  }
}
