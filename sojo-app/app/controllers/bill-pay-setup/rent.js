import Ember from 'ember';
import {inject as service} from '@ember/service';

export default Ember.Controller.extend({
  gatekeeper: service(),
  Noofmonths(date1, date2) {
    var Nomonths;
    Nomonths= (date2.getFullYear() - date1.getFullYear()) * 12;
    Nomonths-= date1.getMonth() + 1;
    Nomonths+= date2.getMonth() +1; // we should add + 1 to get correct month number
    return Nomonths <= 0 ? 0 : Nomonths;
  },
  actions: {
    createRentPaymentEvents(){

      var start_date = new Date(this.get('model.lease.start_date'));
      var end_date = new Date(this.get('model.lease.end_date'));
      console.log('start date is', this.get('model.lease.start_date'));
      console.log('lease end date is', this.get('model.lease.end_date'));
      var nomonths = (end_date.getFullYear() - start_date.getFullYear()) * 12;
      nomonths -= start_date.getMonth() + 1;
      nomonths += end_date.getMonth() + 1;
      var month_difference = nomonths <= 0 ? 0 : nomonths;
      console.log('number of months is', month_difference);

      for (var i = 0; i < month_difference; i++){
        let event = this.get('store').createRecord('sojo-event', {
          name: 'Rent Payment Due',
          date: new Date(2017, i, 1),
          start_time: new Date(2017, i, 1),
          end_time: new Date(2017, i, 1),
          description: "Rent Payment for Month " + i,
          type: "bill",
          account_id: this.get('gatekeeper.currentUser.id')
        });
        event.save();
        console.log('created event', event);
      }
      this.transitionToRoute('bill-pay-setup.electric')
    }
  }
});
