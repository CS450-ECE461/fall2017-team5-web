import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  primaryKey: '_id',
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    console.log(requestType);
    if (requestType == 'findAll'){
      var newpayload = {
        "sojo_events": payload
      }
      payload = newpayload;
    }
    return this._super(store, primaryModelClass, payload, id, requestType);
  },
  serializeIntoHash(data, type, record, options) {
    var root = 'sojo_event';
    data[root] = this.serialize(record, options);
  }
  //normalizeResponse(store, primaryModelClass, payload, id, requestType) {
  //  console.log(payload);
  // // payload.id = payload.sojo_event._id;
  //  return this._super(store, primaryModelClass, payload, id, requestType);
  //}
});
