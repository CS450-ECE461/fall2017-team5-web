import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    createAccount() {
      let {email, username, password} = this.getProperties(['email', 'username', 'password']);
      let account = this.get('store').createRecord('account', {username, password, email});
      let adapterOptions = {signIn: true};

      account.save({adapterOptions}).then(account => {
        console.log('user created successfully!');
        this.transitionToRoute('/');
      }).catch(reason => {
        console.log('error: ' + reason);
      });
    },
  }
});
