import DS from 'ember-data';
import {computed} from '@ember/object';
import {inject as service} from '@ember/service';

let {RESTAdapter} = DS;

export default RESTAdapter.extend({
  gatekeeper: service(),

  host: 'http://localhost:5000',

  headers: computed('gatekeeper.accessToken', function () {
    let accessToken = this.get('gatekeeper.accessToken.access_token');
    return {Authorization: `Bearer ${accessToken}`};
  }),
});
