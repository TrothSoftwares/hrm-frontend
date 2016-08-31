import Ember from 'ember';

export default Ember.Route.extend({
session: Ember.inject.service('session'),


model: function() {

  var route = this;

  return Ember.RSVP.hash({
    employee: this.store.findRecord('employee' , this.get('session.data.authenticated.employeeid') ,{reload :true}),
    leaverolls: this.store.findAll('leaveroll' ,{reload: true}).then(function(leaverolls){
      return leaverolls.filter(function(item ){
        return item.get('employee.id') == route.get('session.data.authenticated.employeeid');
      });

    }),

  });

},

setupController: function(controller,model) {
  controller.set('employee',model.employee);
  controller.set('leaves',model.leaverolls);
  controller.set('pendingleaves',model.leaverolls.filterBy('status','pending'));
  controller.set('approvedleaves',model.leaverolls.filterBy('status','approved'));
  controller.set('rejectedLeaves',model.leaverolls.filterBy('status','rejected'));
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
    },

    reloadModel: function() {
      this.refresh();
    }
  }

});
