import Gatekeeper from 'ember-cli-gatekeeper';

export default Gatekeeper.User.AuthenticatedRoute.extend({
  model() {
    let currentUser = this.get('currentUser');
    return new Ember.RSVP.hash({
      account: currentUser,
      profile: this.get('store').findRecord('profile', currentUser.get('id')),
      lease: this.get('store').findRecord('lease', currentUser.get('id')),
      unit: this.get('store').findRecord('unit', currentUser.get('id'))
    })
  },
});
