import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    signOut() {
      this.get('gatekeeper').signOut().then(() => {
        this.replaceRoute('login');
      });
    }
  }
});
