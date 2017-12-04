import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  primaryKey: 'account_id',
  keyForAttribute(key) {
    return Ember.String.underscore(key);
  },
  normalizeResponse(store, primaryModelClass, payload, id) {
    payload = {
      data: {
        id: payload.account_id,
        type: 'lease',
        attributes: payload
      }
    };
    return payload;
  }
});
