import DS from 'ember-data';

export default DS.Model.extend({
  rent_amount: DS.attr('number'),
  lease_type: DS.attr('string'),
  start_date: DS.attr('date'),
  end_date: DS.attr('date'),
  account_id: DS.belongsTo('account'),
  start_date_string: Ember.computed('start_date', function(){
    var date = new Date(this.get('start_date'));
    var months = ["January", "February", "March",
      "April", "May", "June", "July", "August", "September",
      "October", "November", "December"];
    return months[date.getMonth()] + " " + date.getDay() + ", " + date.getFullYear();
  })
});
