import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';
import Ember from 'ember';

export default Model.extend({
user: belongsTo('user' ,{async:true}),
issuedate: attr('date'),
totaldays: attr('number'),
leavedays: attr('number'),
presentdays: attr('number'),


presentdayscalc: Ember.computed('totaldays' , 'leavedays', function() {
    return parseInt(this.get('totaldays')) - parseInt(this.get('leavedays'));
}),


status: attr('number'),
comments: attr('string'),
});
