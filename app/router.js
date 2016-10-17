import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('dashboard', {path:'/'} ,function() {
    this.route('employees', function() {
      this.route('employee', {path:':id'}, function() {
        this.route('edit');
      });
    });
    this.route('newemployee');
    this.route('employeeleave');
    this.route('adminleave');
    // this.route('attendance');
    this.route('attendance', function() {
      this.route('employee',{path:':id'});
    });
    this.route('recruit-mgt', function() {
      this.route('job' ,{path: ':id'} , function(){
        this.route('view');
      });
    });
    this.route('salary-mgt', function() {
      this.route('employee' , {path: ':id'}, function() {
        this.route('view');
        this.route('edit');
      });
    });
    this.route('analytics');
  });
  this.route('employee', function() {
    this.route('dashboard', function() {
      this.route('recruit-mgt', function() {
        this.route('job', function() {
          this.route('view');
        });
      });
      this.route('analytics');


    });
  });
  this.route('login');
});

export default Router;




// begins work on 25 of august after stopping works on july 10th for marriage purpose. After marriage works are going good so far.


//Todo this weekend

/*
1. Active tab select after Save
2. Employee side attendance history view.
3. Get Month of attendance
scenario 1.if the attendance record is to be created on this month then the date of month will be this month
2. Else

3. Delete employee,

Delete:
1. User with id
2.attendances
3. bids
4.Leave rolls
5.





*/
