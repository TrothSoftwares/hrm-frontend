import Ember from 'ember';

export default Ember.Route.extend({

session: Ember.inject.service('session'),

  model: function() {
var route = this;
    return Ember.RSVP.hash({


      //  leaverolls: this.store.findAll('leaveroll' ,{reload: true})










     leaverolls: this.store.findAll('leaveroll' ,{reload: true}).then(function(leaverolls){
       return leaverolls.filterBy('employee.id',1).filterBy('status','pending');
        //   return {
        //
        //
        //     pendingleaves:  leaverolls,
        //     // approvedleaves:  leaverolls.filterBy('employee', route.get('session.data.authenticated.employeeid')).filterBy('status', 'approved')
        // };
     }),
   });
  },

  setupController: function(controller ,model) {
  controller.set('leaves',model.leaverolls);
      // controller.set('pendingleaves',model.leaverolls.pendingleaves);
      // controller.set('approvedleaves',model.leaverolls.approvedleaves);

  }
});
