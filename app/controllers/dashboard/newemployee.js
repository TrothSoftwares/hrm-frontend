import Ember from 'ember';
import EmberUploader from 'ember-uploader';
import ENV from '../../config/environment';




/**
* Route to create New Employee
@module newEmployeeController
@class newEmployeeController
*/

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),


  /**
  Determines Ajax loading gif for while uploading profilepic
  @property imageUploading
  @default false
  @type Boolean
  */

  imageUploading: false,


  /**
  Determines Whether to show or hide file uploading div . <br> This can be shown only after employee object is created.
  @property isImageuploadingvisible
  @default false
  @type Boolean

  */
  isImageuploadingvisible: false,


  /**
  A variable to save employee data after creating it. This object is refered to get the id of the created employee object , which is to be sent as a parameter for file upload
  @property employee
  @default Null
  @type Object

  */
  employee:'',



  designations:["Select Designation", "Developer" , "Designer", "Manager" , "Accounts Mangager"],
  departments:["Select Departments", "Production", "R&D","Purchasing","Marketing","Human Resource", "Accounts", "Finance"],
  genders:["Select Gender" , "Male", "Female"],
  maritials:["Select Maritial Status", "Married", "Single"],







  /**
  * Function determines "Save" button enable or not based on form inputs status.
  @method isSaveDisabled
  @param {String} firstname
  */

  isSaveDisabled: Ember.computed('firstname'  ,  function() {
    if( Ember.isEmpty(this.get('firstname'))

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
    this.set('designation',designation);
  },


  /**
  * Set the department property via dropdown
  @method selectDepartment
  @param {Object} department
  */
  selectDepartment:function(department){
    this.set('department',department);
  },

  /**
  * Set the gender property via dropdown
  @method selectGender
  @param {Object} gender
  */
  selectGender:function(gender){
    this.set('gender',gender);
  },

  /**
  * Set the maritialstatus property via dropdown
  @method selectMatitial
  @param {Object} maritialstatus
  */
  selectMatitial:function(maritialstatus){
    this.set('maritialstatus',maritialstatus);
  },




  createEmployee:function(){

    var controller  = this;

    var employee = this.store.createRecord('employee',{
      firstname :this.get('firstname'),
      middlename :this.get('middlename'),
      lastname :this.get('lastname'),
      email :this.get('email'),
      contact :this.get('contact'),
      designation :this.get('designation'),
      dateofjoin :this.get('dateofjoin'),
      department :this.get('department'),
      location :this.get('location'),
      gender :this.get('gender'),
      maritialstatus :this.get('maritialstatus'),
      dob :this.get('dob'),
      temporaryaddress :this.get('temporaryaddress'),
      permenantaddress :this.get('permenantaddress'),
      pass:this.get('pass'),
    });

    employee.save().then(function(employee){
      controller.set('firstname','');
      controller.set('middlename','');
      controller.set('lastname','');
      controller.set('email','');
      controller.set('contact','');
      controller.set('designation','');
      controller.set('dateofjoin','');
      controller.set('department','');
      controller.set('location','');
      controller.set('gender','');
      controller.set('maritialstatus','');
      controller.set('dob','');
      controller.set('temporaryaddress','');
      controller.set('permenantaddress','');
      controller.set('isImageuploadingvisible',true);

      controller.set('employee',employee);




      // controller.transitionToRoute('dashboard.employees');
    }).catch(function(){
      controller.notifications.addNotification({
        message: 'Sorry, cant save at the moment !' ,
        type: 'error',
        autoClear: true
      });
    });



  },


  /**
   Uploads profile picture
  @method uploadProfilePic
  @param {Object} params.files files which are sent via input
  @param {Object} employee employee object created
  */
  uploadProfilePic :function(params){
    var controller = this;


    var authenticated = controller.get('session.data.authenticated');
    let files = params.files,
    employee = controller.get('employee');


    var uploader = EmberUploader.Uploader.extend({
      url: ENV.APP.host + '/employees/'+employee.id,
      type: 'PATCH',
      paramNamespace: 'employee', //table name
      paramName: 'url',     // field  name
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
      console.log(jqXHR + textStatus + errorThrown);
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
