import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{

session: Ember.inject.service('session'),




setupController: function(controller) {


    if(Ember.isEqual('Admin', this.get('session.data.authenticated.role'))){
      controller.set('isAdmin',true );
    }
    if(Ember.isEqual('Employee', this.get('session.data.authenticated.role'))){
      controller.set('isEmployee',true );
    }

  },

  
});
