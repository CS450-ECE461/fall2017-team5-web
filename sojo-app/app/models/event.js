import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  date: DS.attr('date'),
  site: DS.attr('string'),
  attendees: DS.hasMany('account')
});
