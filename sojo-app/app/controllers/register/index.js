import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    verifyCode() {
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
          //TODO: code error message output
          alert('invalid activation code');
        }
      }.bind(this));
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
