import Gatekeeper from 'ember-cli-gatekeeper';

export default Gatekeeper.User.AuthenticatedRoute.extend({
    model(){
        let currentUser = this.get ('currentUser');
        console.log('id is' + currentUser.get('id'));
        var model = {
          currentUser: currentUser,
          profile: this.get('store').findRecord('profile', currentUser.get('id'))
        }
        return model;
    }
});
