import Ember from 'ember';

export default Ember.Controller.extend({
inputFormat:'DD/MM/YYYY',


designations:["Select Designation", "Developer" , "Designer", "Manager" , "Accounts Mangager"],
departments:["Select Departments", "Production", "R&D","Purchasing","Marketing","Human Resource", "Accounts", "Finance"],
genders:["Select Gender" , "Male", "Female"],
maritials:["Select Maritial Status", "Married", "Single"],

  isSaveDisabled: Ember.computed('employee.firstname'  ,  function() {
      if( Ember.isEmpty(this.get('employee.firstname'))

    ){return 'disabled';}
    else{return '';}
  }),


  actions:{
    selectDesignation:function(designation){
      this.set('employee.designation',designation);
    },
    selectDepartment:function(department){
      this.set('employee.department',department);
    },
    selectGender:function(gender){
      this.set('employee.gender',gender);
    },
    selectMatitial:function(maritialstatus){
      this.set('employee.maritialstatus',maritialstatus);
    },


    saveEmployee:function(){
      var controller = this;
      var employee = this.get('employee');

      employee.save();

    }
  }




});
