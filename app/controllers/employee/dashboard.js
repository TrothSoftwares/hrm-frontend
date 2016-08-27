import Ember from 'ember';


export default Ember.Controller.extend({

  imageUploading: false,


  designations:["Select Designation", "Developer" , "Designer", "Manager" , "Accounts Mangager"],
  departments:["Select Departments", "Production", "R&D","Purchasing","Marketing","Human Resource", "Accounts", "Finance"],
  genders:["Select Gender" , "Male", "Female"],
  maritials:["Select Maritial Status", "Married", "Single"],

  selectDesignation:function(designation){
    this.set('employee.designation',designation);
  }

});
