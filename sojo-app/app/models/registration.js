import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  password: DS.attr('string'),
  confirmation_code: DS.attr('string'),
  account_id: DS.attr('string')
});
