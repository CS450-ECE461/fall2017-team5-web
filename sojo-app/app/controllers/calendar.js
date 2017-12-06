import Controller from '@ember/controller';
import _ from 'lodash';


export default Controller.extend({
  eventDatesArray: [],
  center: new Date(),
  selectedDate: new Date(new Date().toDateString()),
  birthday: new Date(2017, 4, 15),
  actions: {
    updateSelectedDate() {
      console.log(this.get('model'));
    }
  }
});
