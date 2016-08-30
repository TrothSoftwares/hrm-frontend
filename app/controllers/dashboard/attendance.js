import Ember from 'ember';

export default Ember.Controller.extend({



  actions:{
    editSalary:function(employee){
      employee.set('editemployee',true);
    },

    saveSalary:function(employee){

      //check current month , if todays date is more than issuedate , set
      employee.set('editemployee',false);
      employee.get('attendances').forEach(function(attendance){
        attendance.set('presentdays',attendance.get('presentdayscalc'));
        attendance.save();
      });
    }
  }
});
