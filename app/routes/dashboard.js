import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{

session: Ember.inject.service('session'),

// beforeModel:function(){
//
//   if(Ember.isEqual('Employee', this.get('session.data.authenticated.role'))){
//     this.transitionTo('/employee/dashboard');
//   }
// },



// beforeModel: function(transition) {
//         // if (this.get('access').contains(this.get('currentUser.role'))) {
//         //     return true;
//         // }
//         // manage the unauthorized attempt
//           if(Ember.isEqual('Employee', this.get('session.data.authenticated.role'))){
//             this.get('session').invalidate();
//             console.log("session invalidated");
//             this.transitionTo('login'); // or whatever
//           }
//         // this.transitionTo('login'); // or whatever
//     },




setupController: function(controller) {


    if(Ember.isEqual('Admin', this.get('session.data.authenticated.role'))){
      controller.set('isAdmin',true );
    }
    if(Ember.isEqual('Employee', this.get('session.data.authenticated.role'))){
      controller.set('isEmployee',true );
    }

  },

  actions: {
    logout() {

      this.get('session').invalidate();
      console.log("redirect to login");

      this.transitionTo('login');
    }
  }
});
