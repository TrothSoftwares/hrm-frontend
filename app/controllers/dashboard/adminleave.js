import Ember from 'ember';

export default Ember.Controller.extend({
  inputFormat:'DD/MM/YYYY',


  actions: {






    calendarAddOccurrence: function(occurrence) {
      var controller = this;
      // console.log(occurrence);
      // Ember.$('.ui.modal').modal('show');
      var newevent = controller.store.createRecord('event',{
        title:'sssss',
        startsAt: occurrence.get('startsAt'),
        endsAt: occurrence.get('endsAt')
      });


      newevent.save().then(function(){

              var neweventObject = Ember.Object.create({
                title: occurrence.get('title'),
                startsAt: occurrence.get('startsAt'),
                endsAt: occurrence.get('endsAt')
              });
              controller.get('occurrences').pushObject(neweventObject);
      }
    );


    },

    calendarUpdateOccurrence: function(occurrence, properties) {

      occurrence.setProperties(properties);


    },

    calendarRemoveOccurrence: function(occurrence) {
console.log(occurrence.id);
      this.get('occurrences').removeObject(occurrence);


    }
  }
});
