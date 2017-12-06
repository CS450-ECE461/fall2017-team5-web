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
      let dummyevent1 = this.get('store').createRecord('sojo-event', {
        name: 'Package Received',
        date: new Date(2017, 11, 6),
        start_time: new Date(2017, 11, 6),
        end_time: new Date(2017, 11, 6),
        description: "You have a package to pick up at the main office",
        type: "event",
        account_id: this.get('gatekeeper.currentUser.id')
      });
      dummyevent1.save();
      console.log('made dummy event 1', dummyevent1);

      let dummyevent2 = this.get('store').createRecord('sojo-event', {
        name: 'A/C Service Appointment',
        date: new Date(2017, 11, 17),
        start_time: new Date(2017, 11, 17),
        end_time: new Date(2017, 11, 17),
        description: "Maintenance will be by to change the air filter",
        type: "service",
        account_id: this.get('gatekeeper.currentUser.id')
      });
      dummyevent2.save();
      console.log('made dummy event 2', dummyevent2);

      let dummyevent3 = this.get('store').createRecord('sojo-event', {
        name: 'A Message From Your Landlord',
        date: new Date(2017, 11, 8),
        start_time: new Date(2017, 11, 8),
        end_time: new Date(2017, 11, 8),
        description: "Eagle Drive will be closed for renovations. Please follow signs",
        type: "event",
        account_id: this.get('gatekeeper.currentUser.id')
      });
      dummyevent3.save();
      console.log('made dummy event 3', dummyevent3);

      let dummyevent4 = this.get('store').createRecord('sojo-event', {
        name: 'Christmas Social',
        date: new Date(2017, 11, 1),
        start_time: new Date(2017, 11, 1),
        end_time: new Date(2017, 11, 22),
        description: "Come celebrate holiday cheer with us from 3pm - 6pm in the main office!",
        type: "event",
        account_id: this.get('gatekeeper.currentUser.id')
      });
      dummyevent4.save();
      console.log('made dummy event 4', dummyevent4);

      var start_date = new Date(this.get('model.lease.start_date'));
      var end_date = new Date(this.get('model.lease.end_date'));
      console.log('start date is', this.get('model.lease.start_date'));
      console.log('lease end date is', this.get('model.lease.end_date'));
      var nomonths = (end_date.getFullYear() - start_date.getFullYear()) * 12;
      nomonths -= start_date.getMonth() + 1;
      nomonths += end_date.getMonth() + 1;
      var month_difference = nomonths <= 0 ? 0 : nomonths;
      console.log('number of months is', month_difference);
      let event = this.get('store').createRecord('sojo-event', {
        name: 'Rent Payment Due',
        date: new Date(2017, 11, 1),
        start_time: new Date(2017, 11, 1),
        end_time: new Date(2017, 11, 1),
        description: "Rent Payment for December",
        type: "bill",
        account_id: this.get('gatekeeper.currentUser.id')
      });
      event.save();
      for (var i = 0; i < month_difference; i++){
        let event = this.get('store').createRecord('sojo-event', {
          name: 'Rent Payment Due',
          date: new Date(2018, i, 1),
          start_time: new Date(2018, i, 1),
          end_time: new Date(2018, i, 1),
          description: "Rent Payment for Month " + (i+1),
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
