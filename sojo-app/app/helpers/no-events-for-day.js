import Ember from 'ember';

export function noEventsForDay(params/*, hash*/) {
  let datesArray = params[0].toArray();
  let date = params[1];
  let matchedDatesArray = [];
  for (var i = 0; i < datesArray.length; i++) {
    if (datesArray[i].get('date').toDateString() === date.toDateString()) {
      matchedDatesArray.push(params[0].objectAt(i))
    }
  }
  return matchedDatesArray.length === 0;
}

export default Ember.Helper.helper(noEventsForDay);
