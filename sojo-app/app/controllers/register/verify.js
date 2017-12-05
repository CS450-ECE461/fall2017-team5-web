import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateEvents(){
      alert('TODO: Remove this!! This is a proof of concept of saving stuff to server.')
      console.log('account id is', this.get('model.currentUser.id'));
      let event = this.get('store').createRecord('sojo-event', {
        name: 'Account Only Event',
        date: new Date(2017, 11, 5),
        start_time: new Date(2017, 11, 5),
        end_time: new Date(2017, 11, 5),
        description: "client side record made",
        type: "service",
        account_id: this.get('model.currentUser.id')
      });
      event.save();
    },
    updateProfile(){
      this.get('store').findRecord('profile', this.get('model.currentUser.id')).then(function(profile){
        profile.set('full_name', "Kyle Peeler");
        profile.save();
      });
    }
  }
});
