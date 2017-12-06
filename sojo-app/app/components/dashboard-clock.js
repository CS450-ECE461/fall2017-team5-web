import Ember from 'ember';

var months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export default Ember.Component.extend({
  day: new Date().getDate(),
  month: months[new Date().getMonth()],
  nextBillDue: Ember.computed('day', function () {
    let currentDay = this.get('day');
    if (currentDay > 1 && currentDay <= 16) {
      return "Utilities";
    } else {
      return "Rent";
    }
  }),
  daysRemaining: Ember.computed('day', 'nextBillDue', function () {
    let billDue = this.get('nextBillDue');
    let currentDay = this.get('day');
    if (currentDay == 1 || currentDay == 16) {
      return 0;
    } else if (billDue === "Utilities") {
      return 16 - currentDay;
    } else if (billDue === "Rent") {
      return 31 - currentDay;
    }
  }),
  billDueImmediately: Ember.computed('daysRemaining', function () {
    return this.get('daysRemaining') === 0;
  })
});
