import Ember from 'ember';
var months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export default Ember.Component.extend({
  day: new Date().getDate(),
  month: months[new Date().getMonth()]
});
