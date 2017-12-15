import * as types from '../constants/reverse.const';

export function reverse(str) {
  const reversedString = str.split('').reverse().join('');
  return {
    type: types.STRING,
    payload: reversedString
  }
}
