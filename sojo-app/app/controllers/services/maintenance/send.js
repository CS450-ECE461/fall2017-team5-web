import Controller from '@ember/controller';
import Ember from 'ember';


export default Controller.extend({
  queryParams: ['type'],
  type: 'Maintenance Request',
  messageCount: 300,
  actions: {
    updateMessageCount() {
      var text_length = $('#landlord-message').val().length;
      var text_remaining = 300 - text_length;
      this.set('messageCount', text_remaining);
    }
  }
});
