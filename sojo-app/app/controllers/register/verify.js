import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateEvents(){
      alert('TODO: Remove this!! This is a proof of concept of saving stuff to server.')
      let event = this.get('store').createRecord('event', {
        name: 'Hello world!',
        date: new Date(2017, 11, 5),
        start_time: new Date(2017, 11, 5),
        end_time: new Date(2017, 11, 5),
        description: "client side record made",
        type: "service"
      });
      event.save();
    }
  }
});
