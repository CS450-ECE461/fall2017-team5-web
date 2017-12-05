import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  primaryKey: '_id',
  serialize(snapshot, options){
    console.log(snapshot);
    var json = this._super(...arguments);
    json.id = snapshot.record.id;
    var jason = {sojo_event: json};
    console.log(jason);
    return jason;
  },
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    console.log(payload);
   // payload.id = payload.sojo_event._id;
    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
