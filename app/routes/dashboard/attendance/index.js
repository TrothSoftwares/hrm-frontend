import Ember from 'ember';

export default Ember.Route.extend({


session: Ember.inject.service('session'),


model:function(){

  return Ember.RSVP.hash({

    employees: this.store.findAll('user' ,{reload: true}).then(function(data){
      return data.filter(function(item){
         return item.get('role') !== 'Admin';
      });
    })


 });
},


setupController: function(controller ,model) {
  controller.set('employees',model.employees);
},

  beforeModel: function() {
    if(Ember.isEqual('Admin', this.get('session.data.authenticated.role'))){
      return true;
    }
    else{
      this.transitionTo('dashboard');
    }
  },
});
