import Ember from 'ember';

export default Ember.Controller.extend({
  verificationError: "",
  actions: {
    verifyCode() {
      if (!(typeof this.get('model.confirmation_code') === 'undefined')){
        $.ajax({
          type: "POST",
          url: "http://localhost:5000/checkcode",
          data: {
            confirmation_code: this.get('model.confirmation_code')
          }
        }).done(function(data){
          if (data.valid){
            this.transitionToRoute('register.create-user');
          }else{
            this.set('verificationError', "Confirmation number is invalid!")
          }
        }.bind(this));
      }else{
        this.set('verificationError', "Confirmation number is required! This will be provided by your landlord.")
      }

      //this.transitionToRoute('register.create-user');
      //let email = this.get('model.email');
      //let password = this.get('model.password');
      //let username = email;
      //let account = this.get('store').createRecord('account', {username, password, email});
      //let adapterOptions = {signIn: true};
      //console.log('email is', email);
      //console.log('password is', password);
      //console.log('username is', username);
      //account.save({adapterOptions}).then(account => {
      //    this.get('model').set('account_id', account.get('id'));
      //    this.transitionToRoute('register.confirmation-code');
      //}).catch(reason => {
      //    console.log('error: ' + reason);
      //});
    },
  }
});
