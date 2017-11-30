import DS from 'ember-data';

export default DS.Model.extend({
  rent_amount: DS.attr('number'),
  start_date: DS.attr('date'),
  end_date: DS.attr('date'),
  account_id: DS.belongsTo('account')
});
