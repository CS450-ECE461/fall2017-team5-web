import Ember from 'ember';
import {inject as service} from '@ember/service';

export default Ember.Controller.extend({
  gatekeeper: service(),
  actions: {
    createAccount() {
      let email = this.get('model.email');
      let password = this.get('model.password');
      let username = email;
      let confirmationCode = this.get('model.confirmation_number');
      let account = this.get('store').createRecord('account', {username, password, email});
      let adapterOptions = {signIn: true};
      console.log('email is', email);
      console.log('password is', password);
      console.log('username is', username);
      console.log('confirmation code is', confirmationCode);
      account.save({adapterOptions}).then(account => {
        console.log('created new user');
        var accessToken = this.get('gatekeeper.accessToken.access_token');
        console.log('access token is', accessToken);
        console.log('account id is', account.get('id'));
        //Bootstrap account ID with confirmation number data
        $.ajax({
          type: "POST",
          beforeSend: function(xhr){
            xhr.setRequestHeader("Authorization", "Bearer " + accessToken)
            console.log('xhr', xhr);
            console.log('accessToken header set to', accessToken)
          },
          url: "http://localhost:5000/confirm",
          data: {
            account_id: account.get('id'),
            confirmation_code: confirmationCode
          },

        }).done(function(data){
          console.log('got back', data);
          this.transitionTo('index');
        }.bind(this));
      }).catch(reason => {
        console.log('error: ' + reason);
      });
    },
  }
});
