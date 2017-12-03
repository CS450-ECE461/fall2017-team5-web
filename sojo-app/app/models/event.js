import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  date: DS.attr('date'),
  start_time: DS.attr('date'),
  end_time: DS.attr('date'),
  description: DS.attr('string'),
  type: DS.attr('string'),
  site: DS.attr('string'),
  attendees: DS.hasMany('account')
});
