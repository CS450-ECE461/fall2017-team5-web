import Ember from 'ember';

export function isEventDay(params/*, hash*/) {
  let dateArray = params[0].getEach('date');
  let dateToCheck = params[1];
  for (var i = 0; i < dateArray.length; i++) {
    if (dateArray[i].toDateString() === dateToCheck.toDateString()) {
      return true;
    }
  }
  return false;
}

export default Ember.Helper.helper(isEventDay);
