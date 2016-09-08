import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {

    return Ember.RSVP.hash({
      jobs: this.store.findAll('job' ,{reload :true})
    });

  },

  setupController: function(controller,model) {
    controller.set('jobs',model.jobs);
  },

});
