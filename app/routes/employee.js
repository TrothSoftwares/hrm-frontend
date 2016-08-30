import Ember from 'ember';

export default Ember.Route.extend({
session: Ember.inject.service('session'),

beforeModel: function() {

  if(Ember.isEqual('Admin', this.get('session.data.authenticated.role'))){
    this.transitionTo('login');
  }
  else{
    this.transitionTo('employee');

  }
},


  actions: {
    logout() {
      this.get('session').invalidate();
      this.transitionTo('login');
    }
  }

});
