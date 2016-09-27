import Ember from 'ember';

export default Ember.Controller.extend({


  searchTerm: '',

  matchingEmployeeNames: Ember.computed('employees.@each.firstname','searchTerm', function() {

    var searchTerm = this.get('searchTerm').toLowerCase();

    return this.get('employees').filter(function(agent) {
      return agent.get('firstname').toLowerCase().indexOf(searchTerm) !==-1;
    });
  }),

  
});
