import Ember from 'ember';

export function billTypesForDay(params/*, hash*/) {
  let datesArray = params[0].toArray();
  let date = params[1];
  let matchedDatesArray = [];
  for (var i = 0; i < datesArray.length; i++) {
    if (datesArray[i].get('date').toDateString() === date.toDateString() &&
      datesArray[i].get('type') == 'bill') {
      matchedDatesArray.push(params[0].objectAt(i))
    }
  }
  return matchedDatesArray;
}

export default Ember.Helper.helper(billTypesForDay);
