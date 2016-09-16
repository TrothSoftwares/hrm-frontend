import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';
import { EKMixin } from 'ember-keyboard';
import { keyUp  } from 'ember-keyboard';



export default Ember.Route.extend(UnauthenticatedRouteMixin ,EKMixin, {

activateKeyboard: Ember.on('init', function() {
    this.set('keyboardActivated', true);
  }),



  aFunction: Ember.on(keyUp('Enter'), function() {
    Ember.$('#id_button').click();
  }),

});
