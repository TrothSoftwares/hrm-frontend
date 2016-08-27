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
    this.route('employeeleave');
    this.route('adminleave');
    this.route('attendance');
    this.route('salary-mgt', function() {
      this.route('employee' , {path: ':id'}, function() {
        this.route('view');
        this.route('edit');
      });
    });
  });
  this.route('employee', function() {
    this.route('dashboard');
  });
  this.route('login');
});

export default Router;

// begins work on 25 of august after stopping works on july 10th for marriage purpose. After marriage works are going good so far.
