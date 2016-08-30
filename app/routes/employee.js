import Ember from 'ember';

export default Ember.Route.extend({
session: Ember.inject.service('session'),


model: function() {

  return Ember.RSVP.hash({
    employee: this.store.findRecord('employee' , this.get('session.data.authenticated.employeeid') ,{reload :true})
  });

},

setupController: function(controller,model) {
  controller.set('employee',model.employee);
},



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
