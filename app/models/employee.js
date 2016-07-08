import Model from 'ember-data/model';
 import attr from 'ember-data/attr';
 import {hasMany } from 'ember-data/relationships';




export default Model.extend({
  firstname: attr('string'),
  middlename: attr('string'),
  lastname: attr('string'),
  email: attr('string'),
  contact: attr('string'),
  designation: attr('string'),
  dateofjoin: attr('date'),
  department: attr('string'),
  location: attr('string'),
  gender: attr('string'),
  maritialstatus: attr('string'),
  dob: attr('date'),
  temporaryaddress: attr('string'),
  permenantaddress: attr('string'),
  status: attr('string'),
  url: attr('string'),
  fullurl: attr('string'),
  thumburl: attr('string'),
  pass: attr('string'),
  role: attr('string'),
  leaverolls: hasMany('leaveroll' ,{embedded: 'always', async:true}),





});
