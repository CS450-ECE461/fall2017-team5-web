import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  primaryKey: '_id',
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    console.log(payload);
    return this._super(store, primaryModelClass, payload, id, requestType)
  }
});
