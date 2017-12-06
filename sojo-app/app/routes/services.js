import Gatekeeper from 'ember-cli-gatekeeper';

export default Gatekeeper.User.AuthenticatedRoute.extend({
  model() {
    let currentUser = this.get('currentUser');
    return currentUser;
  }
});
