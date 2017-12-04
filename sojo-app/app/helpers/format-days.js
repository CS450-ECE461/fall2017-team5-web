import Ember from 'ember';

export function formatDays([value, ...rest]) {
  let dayString = "Days";
  if (value == 1) {
    dayString = "Day"
  }
  return `${value} ${dayString}`
}

export default Ember.Helper.helper(formatDays);
