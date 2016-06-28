import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('dashboard', {path:'/'},function() {
    this.route('employees', function() {
      this.route('employee', {path:':id'}, function() {
        this.route('edit');
      });
    });
    this.route('newemployee');
  });
  this.route('login');
});

export default Router;
