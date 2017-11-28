import DS from 'ember-data';

export default DS.Model.extend({
  full_name: DS.attr('string'),
  phone: DS.attr('number'),
  has_bill_pay_setup: DS.attr('boolean'),
  has_signed_lease: DS.attr('boolean'),
  sojo_events: DS.hasMany('event'),
  account_id: DS.belongsTo('account')
});
