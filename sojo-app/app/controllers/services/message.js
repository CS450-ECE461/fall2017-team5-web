import Ember from 'ember';

export default Ember.Controller.extend({
  messageCount: 500,
  actions: {
    updateMessageCount() {
      var text_length = $('#landlord-message').val().length;
      var text_remaining = 500 - text_length;
      this.set('messageCount', text_remaining);
    }
  }

});
