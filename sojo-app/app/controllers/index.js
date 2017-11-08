import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    signOut() {
      this.get('gatekeeper').signOut().then(() => {
        this.replaceRoute('login');
      });
    }
  }
});
