import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.modelFor('register');
  },
  actions: {
    didTransition(){
      //redirect if user has not entered a confirmation number
      if (typeof this.modelFor('register').get('confirmation_code') === 'undefined'){
         this.transitionTo('register.index');
      }
    }
  }
});
