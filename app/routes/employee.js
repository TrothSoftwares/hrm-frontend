import Ember from 'ember';


export default Ember.Route.extend({
session: Ember.inject.service('session'),


model: function() {






  var route = this;

  return Ember.RSVP.hash({
    employees: this.store.findRecord('user' , this.get('session.data.authenticated.id') ,{reload :true}).catch(function(){
      route.notifications.addNotification({
        message: 'Employee Not Found !' ,
        type: 'error',
        autoClear: true
      });
      route.get('session').invalidate();
      route.transitionTo('login');

    }

    ),
    leaverolls: this.store.findAll('leaveroll' ,{reload: true}).then(function(leaverolls){
      return leaverolls.filter(function(item ){
        return item.get('user.id') == route.get('session.data.authenticated.id');
      });
    }),
    jobs: this.store.findAll('job',{reload: true}),
    // bids: this.store.findAll('bid',{reload: true}),

  });

},

setupController: function(controller,model) {

  var route = this;
  var employeeid = route.get('session.data.authenticated.id').toString();

  controller.set('employee',model.employees);
  controller.set('jobs',model.jobs);
  controller.set('leaves',model.leaverolls.sortBy('status'));


  controller.set('bids',
    model.jobs.forEach(function(job){

      job.get('bids').then(function(bids){

        var bidArray = [];
        bids.forEach(function(bid){
          bidArray.push(bid.get('employee.id'));
        });

          if(bidArray.indexOf(employeeid) > -1){
                job.set('isApplicableText','Applied');
                job.set('isApplicable','disabled');
          }
          else {
                job.set('isApplicable','');
                job.set('isApplicableText','Apply');
          }

      });
    }));


},



beforeModel: function() {

  if(Ember.isEqual('Admin', this.get('session.data.authenticated.role'))){
    this.transitionTo('login');
  }
  else{
    this.transitionTo('employee');

  }
},


  actions: {
    logout() {
      var route =this;
      route.get('session').invalidate();
      route.transitionTo('login');
    },

    reloadModel: function() {
      this.refresh();
    }

  }

});
