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

 // var currentUser = controller.store.findRecord('employee',controller.get('session.data.authenticated.employeeid'));
 //
 // job.get('employees').addObject(currentUser);
 //
 // currentUser.get('jobs').addObject(job);




var employee = controller.get('store').peekRecord('employee',controller.get('session.data.authenticated.employeeid'));

 var newBid = controller.get('store').createRecord('bid',{
   'uniq': 1,
   'job': job,
   'employee': employee,
   }
);
newBid.save();
    }



  }
});
