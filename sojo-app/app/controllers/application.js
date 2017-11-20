import Controller from '@ember/controller';
import Ember from 'ember';


export default Controller.extend({
  isSignedIn: Ember.computed ('gatekeeper.isSignedIn', function () {
      return this.get ('gatekeeper.isSignedIn');
  })
});
