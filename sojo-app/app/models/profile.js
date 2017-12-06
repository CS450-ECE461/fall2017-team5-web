import DS from 'ember-data';

export default DS.Model.extend({
  full_name: DS.attr('string'),
  phone: DS.attr('string'),
  has_bill_pay_setup: DS.attr('boolean'),
  has_signed_lease: DS.attr('boolean'),
  account_id: DS.belongsTo('account'),
  account_picture_url: DS.attr('string'),
  generated_avatar_url: Ember.computed('full_name', function () {
    return "https://ui-avatars.com/api/?name=" + encodeURI(this.get('full_name')) + "&background=FDBD0E&color=fff&size=160"
  }),
  electric_utility: DS.belongsTo('utility'),
  cable_utility: DS.belongsTo('utility'),
  object_id: DS.attr('string')
});
