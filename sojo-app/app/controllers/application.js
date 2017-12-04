import Controller from '@ember/controller';
import Ember from 'ember';


export default Controller.extend({
  isSignedIn: Ember.computed('gatekeeper.isSignedIn', function () {
    return this.get('gatekeeper.isSignedIn');
  }),
  isHome: Ember.computed('currentRouteName', function () {
    return this.get('currentRouteName') === 'index';
  }),
  isServices: Ember.computed('currentRouteName', function () {
    return this.get('currentRouteName').includes('services') && this.get('currentRouteName') !== 'index';
  }),
  isBillPay: Ember.computed('currentRouteName', function () {
    return this.get('currentRouteName').includes('bill-pay');
  }),
  isCalendar: Ember.computed('currentRouteName', function () {
    return this.get('currentRouteName').includes('calendar');
  }),
  isAccount: Ember.computed('currentRouteName', function () {
    return this.get('currentRouteName').includes('account');
  })
});
