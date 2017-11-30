import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id) {
    payload = {
      data: {
        id: payload.account_id,
        type: 'unit',
        attributes: payload
      }
    };
    return payload;
  }
});
