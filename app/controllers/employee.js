import Ember from 'ember';

export default Ember.Controller.extend({


  session: Ember.inject.service('session'),
  inputFormat:'DD/MM/YYYY',
  outputMonthFormat:'MMMM',

  actions:{
    createLeaveRoll:function(){
      var controller = this;

      var employee = this.get('store').findRecord('user', this.get('session.data.authenticated.id'));


      employee.then(function(){
        var leaveroll = controller.store.createRecord('leaveroll',{
          user:employee,
          fromdate: controller.get('fromdate'),
          todate: controller.get('todate'),
          status: 'pending'
        });
        leaveroll.save().then(function(){
          controller.notifications.addNotification({
            message: 'Applied!' ,
            type: 'success',
            autoClear: true
          });
          controller.set('fromdate','');
          controller.set('todate','');
          controller.set('comments','');
        });

        controller.send('reloadModel');


      });

    },

    applyJob:function(job){
      var controller = this;


      var employee = controller.get('store').peekRecord('user',controller.get('session.data.authenticated.id'));


      var newBid = controller.get('store').createRecord('bid',{
        'uniq': 1,
        'job': job,
        'user': employee,
      }
    );
    newBid.save().then(function(){
      controller.notifications.addNotification({
        message: 'Applied!' ,
        type: 'success',
        autoClear: true
      });
      controller.send('reloadModel');
    });
  }



}
});
