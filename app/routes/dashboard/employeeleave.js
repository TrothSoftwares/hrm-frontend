import Ember from 'ember';

export default Ember.Route.extend({

  session: Ember.inject.service('session'),

  model: function() {
    var route = this;
    return Ember.RSVP.hash({

      leaverolls: this.store.findAll('leaveroll' ,{reload: true}).then(function(leaverolls){
        return leaverolls.filter(function(item ){
          return item.get('employee.id') == route.get('session.data.authenticated.employeeid');
        });

      }),
    });
  },

  setupController: function(controller ,model) {
    controller.set('leaves',model.leaverolls);
    controller.set('pendingleaves',model.leaverolls.filterBy('status','pending'));
    controller.set('approvedleaves',model.leaverolls.filterBy('status','approved'));
    controller.set('rejectedLeaves',model.leaverolls.filterBy('status','rejected'));
  },

 actions: {
    reloadModel: function() {
      this.refresh();
    }
  }


});
