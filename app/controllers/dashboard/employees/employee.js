import Ember from 'ember';
import EmberUploader from 'ember-uploader';
import ENV from '../../../config/environment';





/**
* Route to create New Employee
@module employeeEmployeeController
@class employeeEmployeeController
*/


export default Ember.Controller.extend({

  ajax: Ember.inject.service(),

  /**
  Property injected to supply token , which should be attached with file upload via ember-cli-upload
  @property session
  @type Object
  */
  session: Ember.inject.service('session'),



  inputFormat:'DD/MM/YYYY',


  /**
  Determines Ajax loading gif for while uploading profilepic
  @property imageUploading
  @default false
  @type Boolean
  */
  imageUploading: false,


  designations:["Select Designation", "Developer" , "Designer", "Manager" , "Accounts Mangager"],
  departments:["Select Departments", "Production", "R&D","Purchasing","Marketing","Human Resource", "Accounts", "Finance"],
  genders:["Select Gender" , "Male", "Female"],
  maritials:["Select Maritial Status", "Married", "Single"],


  /**
  * Function determines "Save" button enable or not based on form inputs status.
  @method isSaveDisabled
  @param {String} employee.firstname
  */
  isSaveDisabled: Ember.computed('employee.firstname'  ,  function() {
    if( Ember.isEmpty(this.get('employee.firstname'))

  ){return 'disabled';}
  else{return '';}
}),


actions:{
  /**
  * Set the designation property via dropdown
  @method selectDesignation
  @param {Object} designation
  */
  selectDesignation:function(designation){
    this.set('employee.designation',designation);
  },



  /**
  * Set the department property via dropdown
  @method selectDepartment
  @param {Object} department
  */
  selectDepartment:function(department){
    this.set('employee.department',department);
  },



  /**
  * Set the gender property via dropdown
  @method selectGender
  @param {Object} gender
  */
  selectGender:function(gender){
    this.set('employee.gender',gender);
  },


  /**
  * Set the maritialstatus property via dropdown
  @method selectMatitial
  @param {Object} maritialstatus
  */
  selectMatitial:function(maritialstatus){
    this.set('employee.maritialstatus',maritialstatus);
  },



  saveEmployee:function(){
    var controller = this;
    this.get('employee').save().then(function(){
      controller.get('employee').reload();
          controller.notifications.addNotification({
            message: 'Saved !' ,
            type: 'success',
            autoClear: true
          });
            Ember.$('.editemployee').transition('fade');
            Ember.$('.viewemployee').transition('fade');
    });

  },

  deleteEmployee:function(employee){
    var controller = this

    var confirm = window.confirm("Are you sure want to delete?")

    if(confirm){

employee.destroyRecord().then(function(){
  controller.notifications.addNotification({
    message: 'Deleted !' ,
    type: 'success',
    autoClear: true
  });
  controller.transitionToRoute('dashboard.employees.index');
});
    //  var leaverolls = employee.get('leaverolls');
    //  leaverolls.forEach(function(leaveroll){
    //     leaveroll.destroyRecord().then(function(){
    //       var bids =  employee.get('bids');
    //       bids.forEach(function(bid){
    //         bid.destroyRecord();
    //       }).then(function(){
    //         var attendances =  employee.get('attendances');
    //         attendances.forEach(function(attendance){
    //           attendance.destroyRecord();
    //         });
    //       });
    //     });
    //   });

      // controller.get('ajax').request(ENV.APP.host + '/users/5', {
      //         method: 'DELETE',
      //
      //       });



    }

  },


/**
Flips the view between div with class "viewemployee" and "editemployee"
@method filpview
*/
  flipview: function() {
    Ember.$('.editemployee').transition('fade');
    Ember.$('.viewemployee').transition('fade');
  },



  /**
  Uploads profile picture
  @method uploadProfilePic
  @param {Object} params.files files which are sent via input
  @param {Object} params.employee the current employee object which is being sent
  */

  uploadProfilePic :function(params){
    var controller = this;


    var authenticated = controller.get('session.data.authenticated');
    let files = params.files,
    employee = params.employee;


    var uploader = EmberUploader.Uploader.extend({
      url: ENV.APP.host + '/employees/'+employee.id,
      type: 'PATCH',
      paramNamespace: 'employee',
      paramName: 'url',
      ajaxSettings: function() {
        var settings = this._super.apply(this, arguments);
        settings.headers = {
          'Authorization':'Token token="'+ authenticated.token +'", email="'+ authenticated.email +'"'
        };
        return settings;
      }
    }).create();


    uploader.on('progress', function() {
      controller.set('imageUploading',true);
    });

    uploader.on('didUpload', function() {
      controller.notifications.addNotification({
        message:  'File uploaded' ,
        type: 'success',
        autoClear: true
      });
      controller.set('imageUploading',false);
    });

    uploader.on('didError', function(jqXHR, textStatus, errorThrown) {
      controller.notifications.addNotification({
        message: 'Sorry something went wrong' ,
        type: 'success',
        autoClear: true
      });
      controller.set('imageUploading',false);
    });


    if (!Ember.isEmpty(files)) {
      uploader.upload(files[0]).then(function(){
        controller.get('employee').reload();
      }
    );
  }


},

}




});
