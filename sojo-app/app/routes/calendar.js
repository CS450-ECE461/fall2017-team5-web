import Gatekeeper from 'ember-cli-gatekeeper';

export default Gatekeeper.User.AuthenticatedRoute.extend({
  model() {
    return Ember.RSVP.hash({
      currentUser: this.get('currentUser'),
      events: this.get('store').findAll('sojo-event')
    });
  }
});
