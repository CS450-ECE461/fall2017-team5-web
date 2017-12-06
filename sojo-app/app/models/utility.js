import DS from 'ember-data';

export default DS.Model.extend({
  company_name: DS.attr('string'),
  url: DS.attr('string'),
  day_due: DS.attr('number'),
  account_id: DS.belongsTo('account'),
});
