
import Ember from 'ember';

export default Ember.Controller.extend({
  outputFormat: 'MMMM',





  outputFormat: 'MMMM',

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
      },
      viewHistory:function(employee){
        Ember.$('.ui.modal_'+employee.id).modal('show');
      },

      closeAttendance:function(){
        var confirmDelete = window.confirm("Are you sure to close the attendance?");
        if(confirmDelete){
          var controller = this;
          var employees = controller.get('employees');
          employees.forEach(function(employee){
            let newAttendance = controller.store.createRecord('attendance' ,{
              'user':employee
            });
            newAttendance.save();
          });
        }
      },
      printPage:function(){
        window.print();
      }
      // create new records for attendance for all employees

    }


});
