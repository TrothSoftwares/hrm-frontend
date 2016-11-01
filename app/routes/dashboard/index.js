import Ember from 'ember';

export default Ember.Route.extend({


  model: function() {
    return Ember.RSVP.hash({
    leaverolls: this.store.findAll('leaveroll' ,{reload: true}).then(function(projects){
         return {
           pendingLeaves:  projects.filterBy('status', 'pending'),
           approvedLeaves:  projects.filterBy('status', 'approved'),
           rejectedLeaves:  projects.filterBy('status', 'rejected')
       };
    }),
    bids: this.store.findAll('bid' ,{reload: true})

  });
},



  setupController: function(controller ,model) {
    controller.set('leaverolls',model.leaverolls);
    controller.set('bids',model.bids);
  },
});
