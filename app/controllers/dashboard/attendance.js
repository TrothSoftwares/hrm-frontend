import Ember from 'ember';

export default Ember.Controller.extend({



  actions:{
    editSalary:function(employee){
      employee.set('editemployee',true);
    },

    saveSalary:function(employee){
      employee.set('editemployee',false);

      employee.get('salaries').forEach(function(salary){
        salary.set('presentdays',salary.get('presentdayscalc'));
        salary.save();
      });
    }
  }
});
