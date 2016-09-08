import DS from 'ember-data';
import attr from 'ember-data/attr';
import {hasMany } from 'ember-data/relationships';

export default DS.Model.extend({

header: attr('string'),
desc: attr('string'),
skills: attr('string'),
salary: attr('number'),
nofvaccancy: attr('number'),
location: attr('string'),
employees: hasMany('employee')



});
