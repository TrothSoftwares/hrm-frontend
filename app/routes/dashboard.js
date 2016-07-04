import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{

session: Ember.inject.service('session'),




setupController: function(controller) {

    // controller.setProperties(model);

    if(Ember.isEqual('Admin', this.get('session.data.authenticated.role'))){
      controller.set('isAdmin',true );
    }
    if(Ember.isEqual('Employee', this.get('session.data.authenticated.role'))){
      controller.set('isEmployee',true );
    }

  },

  actions: {
    logout() {

      this.get('session').invalidate();
      this.transitionTo('login');
    }
  }
});
