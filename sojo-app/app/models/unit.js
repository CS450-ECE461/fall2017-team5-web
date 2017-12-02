import DS from 'ember-data';

export default DS.Model.extend({
  unit_index: DS.attr('string'),
  building_index: DS.attr('string'),
  apt_complex_address: DS.attr('string'),
  maintenance_email: DS.attr('string'),
  landlord_email: DS.attr('string'),
  account_id: DS.belongsTo('account')
});
