import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.modelFor('register');
  },
  setupController: function(controller, model){
    this._super(controller, model);
    if (this.controllerFor('application').get('isSignedIn')){
      this.transitionTo('index');
    }
  }
  //actions: {
  //  didTransition(){
  //    console.log('is signed in?', this.get('isSignedIn'));
  //    //redirect if user has not entered a confirmation number
  //    //if (this.get('isSignedIn')){
  //    //  this.transitionTo('index');
  //    //}
  //  }
  //}
});
