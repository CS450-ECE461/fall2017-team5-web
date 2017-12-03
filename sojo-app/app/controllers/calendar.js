import Controller from '@ember/controller';
import _ from 'lodash';


export default Controller.extend({
  center: new Date(),
  selectedDate: new Date(new Date().toDateString()),
  birthday: new Date(2017, 4, 15),
  eventDates: [new Date(2017, 10, 4), new Date(2017, 11, 2), new Date (2017, 11, 25)],
  actions: {
    updateSelectedDate(days){
      console.log('days is passed in as', days);
      let selectedDate = null;
      //if the date selected has not been set as an event, days contains all of eventDates and the newly selected date as the last element
      if (days.date.length === this.get('eventDates').length + 1){
        selectedDate = days.date[days.date.length - 1];
      //if the date selected has been set as an event, day selected is not passed back and we must
      //find the difference between eventDates and days to determine the unique element, the unique
      //element is the day we want
      }else if (days.date.length === this.get('eventDates').length - 1){
         selectedDate = this.get('eventDates').filter(function(date){
           function isInDateArray(array, value) {
             return !array.find(item => {return item.getTime() == value.getTime()});
           }
           return isInDateArray(days.date, date);
         })[0];
      }
      this.set('selectedDate', selectedDate);
    }
  }
  });
