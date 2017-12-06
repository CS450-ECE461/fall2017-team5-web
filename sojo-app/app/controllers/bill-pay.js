import Ember from 'ember';
var months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default Ember.Controller.extend({
  month: months[new Date().getMonth()]
});
