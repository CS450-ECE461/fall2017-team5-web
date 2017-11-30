import Ember from 'ember';

export function formatDay([value, ...rest]) {
  if (value < 10){
    return `0${value}`
  }else{
    return value;
  }
}

export default Ember.Helper.helper(formatDay);
