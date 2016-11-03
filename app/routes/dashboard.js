import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{

session: Ember.inject.service('session'),

beforeModel:function(transition){

  // if(Ember.isEqual('Employee', this.get('session.data.authenticated.role'))){
  //    this.transitionTo('employee');
  // }
  // else if(Ember.isEqual('Admin', this.get('session.data.authenticated.role'))){
  //
  //    this.transitionTo('dashboard.employees');
  // }
  // else{
  //    this.transitionTo('login');
  // }



///////////////////////////////    IF EMPLOYEE ////////////////////////
  // if(Ember.isEqual('Admin', this.get('session.data.authenticated.role'))){
  //   this.transitionTo('login');
  // }
  // else{
  //   this.transitionTo('employee');
  //
  // }

  ///////////////////////////////   END OF IF EMPLOYEE ////////////////////////


},


model:function(){




},





setupController: function(controller,model) {






  if(Ember.isEqual('Admin', this.get('session.data.authenticated.role'))){
    controller.set('isAdmin',true );
  }
  if(Ember.isEqual('Employee', this.get('session.data.authenticated.role'))){
    controller.set('isEmployee',true );
  }




  },




  actions: {
    logout() {

      var route =this;

      route.get('session').invalidate();
      route.transitionTo('login');
    },


    reloadModel: function() {
      this.refresh();
    }
  }




});
