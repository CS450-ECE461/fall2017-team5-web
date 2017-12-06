import DS from 'ember-data';

export default DS.Model.extend({
  unit_index: DS.attr('string'),
  building_index: DS.attr('string'),
  address: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  zip: DS.attr('number'),
  maintenance_email: DS.attr('string'),
  landlord_email: DS.attr('string'),
  account_id: DS.belongsTo('account')
});
