import Ember from 'ember';

export function isSameDate(params/*, hash*/) {
  let [date1, date2] = params;
  return date1.getTime() === date2.getTime();
}

export default Ember.Helper.helper(isSameDate);
