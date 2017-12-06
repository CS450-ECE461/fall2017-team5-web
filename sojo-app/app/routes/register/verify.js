import Gatekeeper from 'ember-cli-gatekeeper';

export default Gatekeeper.User.AuthenticatedRoute.extend({
  model() {
    let currentUser = this.get('currentUser');
    return Ember.RSVP.hash({
      profile: this.get('store').findRecord('profile', currentUser.get('id')),
      currentUser: this.get('currentUser'),
      events: this.get('store').findAll('event'),
      unit: this.get('store').findRecord('unit', currentUser.get('id'))
    });
  }
});
