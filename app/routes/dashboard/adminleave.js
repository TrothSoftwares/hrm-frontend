import Ember from 'ember';

export default Ember.Route.extend({


session: Ember.inject.service('session'),



model: function() {
    // return this.store.findAll('project' ,{reload: true});
    return Ember.RSVP.hash({
     leaverolls: this.store.findAll('leaveroll' ,{reload: true}).then(function(projects){
          return {
            pendingLeaves:  projects.filterBy('status', 'pending'),
            approvedLeaves:  projects.filterBy('status', 'approved'),
            rejectedLeaves:  projects.filterBy('status', 'rejected')
        };
     }),
   });
  },

  setupController: function(controller ,model) {

      controller.set('leaverolls',model.leaverolls);
      controller.set('pendingLeaves',model.leaverolls.pendingLeaves);
      controller.set('approvedLeaves',model.leaverolls.approvedLeaves);
      controller.set('rejectedLeaves',model.leaverolls.rejectedLeaves);



  },

  beforeModel: function() {
    if(Ember.isEqual('Admin', this.get('session.data.authenticated.role'))){
      return true;
    }
    else{
      // manage the unauthorized attempt
      this.transitionTo('dashboard'); // or whatever
    }

   }

});
