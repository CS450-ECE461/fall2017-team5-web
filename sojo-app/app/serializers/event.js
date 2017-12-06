import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  primaryKey: '_id',
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = {
      sojo_event: payload.data
    };

    return this._super(store, primaryModelClass, payload, id, requestType);
  },
  //normalizeResponse(store, primaryModelClass, payload, id, requestType) {
  //  console.log(payload);
  // // payload.id = payload.sojo_event._id;
  //  return this._super(store, primaryModelClass, payload, id, requestType);
  //}
});
