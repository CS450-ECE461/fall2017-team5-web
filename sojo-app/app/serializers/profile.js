import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
      var objectid = payload._id;
      console.log('object id is', objectid);
      payload = {
        data: {
          id: payload.account_id,
          type: 'profile',
          attributes: payload
        }
      };
      payload.data.attributes.object_id = objectid;
      console.log('payload.data.attributes.object_id', payload.data.attributes.object_id);
      console.log('payload is', payload);
      return payload;
  },
  serializeIntoHash(data, type, record, options) {
    var root = 'profile';
    data[root] = this.serialize(record, options);
    data.profile._id = data.profile.object_id;
    console.log('serializing', data);

  }
})
