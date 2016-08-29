import Ember from 'ember';

import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
export default Ember.Route.extend(ApplicationRouteMixin, {
  session: Ember.inject.service('session'),

  sessionAuthenticated: function() {


    console.log(this.get('session.data.authenticated.role'));
    if(Ember.isEqual('Admin', this.get('session.data.authenticated.role'))){
      window.location.replace('/');
    }
    if(Ember.isEqual('Employee', this.get('session.data.authenticated.role'))){
      window.location.replace('/employee/dashboard');
    }

    console.log('sessionAuthenticated: authentications ok');

 },
  });
