import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
      return this.store.findRecord('user', params.id );
  },

  setupController: function(controller ,model) {
  controller.set('employee',model);
  }
});
