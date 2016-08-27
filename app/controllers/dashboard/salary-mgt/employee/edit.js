import Ember from 'ember';

export default Ember.Controller.extend({



isSaveDisabled:'',


  actions:{
    saveEmployeeSalary:function(){

      var controller = this;
      controller.get('employee').save().then(function(){
        controller.notifications.addNotification({
          message: 'Saved !' ,
          type: 'success',
          autoClear: true
        });
        controller.transitionToRoute('dashboard.salary-mgt');
        
      });

    }
  }
});
