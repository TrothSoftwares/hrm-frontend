import Ember from 'ember';

export default Ember.Route.extend({

    model: function() {

      return Ember.RSVP.hash({
        employees: this.store.findAll('user' ,{reload: true}).then(function(data){
          return data.filter(function(item){
             return item.get('role') !== 'Admin';
          });
        })
      });

    },









    setupController: function(controller,model) {
      controller.set('employees',model.employees);
    },

});
