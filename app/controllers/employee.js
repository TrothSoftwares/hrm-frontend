import Ember from 'ember';

export default Ember.Controller.extend({


  session: Ember.inject.service('session'),
  inputFormat:'DD/MM/YYYY',

  actions:{
    createLeaveRoll:function(){
      var controller = this;

       var employee = this.get('store').findRecord('employee', this.get('session.data.authenticated.employeeid'));


       employee.then(function(){
         var leaveroll = controller.store.createRecord('leaveroll',{
           employee:employee,
           fromdate: controller.get('fromdate'),
           todate: controller.get('todate'),
           status: 'pending'
          });
          leaveroll.save().then(function(){
            controller.set('fromdate','');
            controller.set('todate','');
            controller.set('comments','');
          });

          controller.send('reloadModel');


       });

    },

    applyJob:function(job){


 var controller = this;


 var newBid = controller.store.createRecord('bid',{

  //  'job': job,
  //  'employee': controller.get('session.data.authenticated.employeeid'),

   job: 1,
   employee: 1
 }
);

newBid.save();

    }

  }
});
