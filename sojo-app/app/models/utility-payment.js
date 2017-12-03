import DS from 'ember-data';

export default DS.Model.extend({
  account_id: DS.belongsTo('account'),
  amount_paid: DS.attr('number'),
  date_paid: DS.attr('date'),
  payment_type: DS.attr('string'),
  payment_object: DS.belongsTo('utility')
});
