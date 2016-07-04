import Ember from 'ember';

export default Ember.Route.extend({


session: Ember.inject.service('session'),

  beforeModel: function(transition) {
    if(Ember.isEqual('Admin', this.get('session.data.authenticated.role'))){
      return true;
    }
    else{
      // manage the unauthorized attempt
      this.transitionTo('dashboard'); // or whatever
    }

   }

});
