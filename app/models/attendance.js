import DS from 'ember-data';
import attr from 'ember-data/attr';
import { belongsTo} from 'ember-data/relationships';
import Ember from 'ember';

export default DS.Model.extend({
  employee: belongsTo('employee' ,{async:true}),
  totaldays: attr('number'),
  leavedays: attr('number'),
  presentdays: attr('number'),
  status: attr('string'),
  comments: attr('string'),
  updatedat: attr('date'),

  presentdayscalc: Ember.computed('totaldays' , 'leavedays', function() {
      return parseInt(this.get('totaldays')) - parseInt(this.get('leavedays'));
  }),

  presentdaysPercentage: Ember.computed('totaldays' , 'leavedays', function() {
      var presentDays =  parseInt(this.get('totaldays')) - parseInt(this.get('leavedays'));
      return Math.round((presentDays / parseInt(this.get('totaldays'))) * 100);
  }),

});
