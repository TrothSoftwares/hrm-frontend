import DS from 'ember-data';
import attr from 'ember-data/attr';
import {hasMany } from 'ember-data/relationships';
import Ember from 'ember';


export default DS.Model.extend({

session: Ember.inject.service('session'),
header: attr('string'),
desc: attr('string'),
skills: attr('string'),
salary: attr('number'),
nofvaccancy: attr('number'),
location: attr('string'),


employees: hasMany('employee' , {embedded: 'always', async:true}),
bids: hasMany('bid' , {embedded: 'always', async:true}),



// isApplicable: Ember.computed('bids' ,function() {
//   this.get('bids').then(function(bids){
//     console.log(bids);
//   });
// },

isApplicable: attr('string'),




});
