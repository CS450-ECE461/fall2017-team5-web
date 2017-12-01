import Controller from '@ember/controller';

export default Controller.extend({
  center: new Date(),
  birthday: new Date(2017, 4, 15),
  eventDates: [new Date(2017, 10, 4), new Date (2017, 10, 22)],
  actions: {
    test(){
      console.log('selected');
    }
  }
  });
