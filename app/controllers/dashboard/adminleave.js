import Ember from 'ember';

export default Ember.Controller.extend({
  inputFormat:'DD/MM/YYYY',


  actions: {


calendarAddOccurrenceOriginal:function(occurrence){
 var controller = this;
  var newevent = controller.store.createRecord('event',{
    title: controller.get('neweventtitle'),
    startsAt: controller.get('neweventtitle'),
    endsAt: controller.get('neweventtitle'),
  });


  newevent.save().then(function(){
    var neweventObject = Ember.Object.create({
      title: controller.get('neweventtitle'),
      startsAt: occurrence.get('startsAt'),
      endsAt: occurrence.get('endsAt')
    });
    controller.get('occurrences').pushObject(neweventObject);
    controller.set('neweventtitle' ,'');
  }
);
},


    calendarAddOccurrence: function(occurrence) {
      var controller = this;
      Ember.$('.ui.modal').modal({
        closable  : false,
        onDeny    : function(){
          controller.set('neweventtitle' ,'');
        },
        onApprove : function() {
          controller.send('calendarAddOccurrenceOriginal',occurrence);
        }
      }).modal('show');
  },

  calendarUpdateOccurrence: function(occurrence, properties) {
    var controller =  this;
    occurrence.setProperties(properties);
    console.log(occurrence);

    setTimeout(function(){
      controller.store.find('event',occurrence.get('id')).then(function(event){
        event.save();
      });
    }, 1000);
  },




  calendarRemoveOccurrence: function(occurrence) {
    this.get('occurrences').removeObject(occurrence);

    occurrence.destroyRecord();

  }
}
});
