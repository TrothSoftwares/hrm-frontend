import Ember from 'ember';

export default Ember.Route.extend({



    model: function() {
      return Ember.RSVP.hash({
      job: this.modelFor('dashboard.recruit-mgt.job'),
    });

    },

  setupController: function(controller ,model) {
    controller.set('job',model.job );


  }
});
