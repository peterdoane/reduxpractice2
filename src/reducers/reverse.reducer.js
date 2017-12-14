import * as types from '../constants/reverse.const';

export default function ReverseApp(state = null, action ) {
  switch(action.type){
    case types.STRING:
      return state = state.reverse();
  }
  return state;
}
