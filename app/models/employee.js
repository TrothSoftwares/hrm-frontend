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
  basic: attr('number'),
  houserentallowance: attr('number'),
  adhoc: attr('number'),
  transport: attr('number'),
  misc: attr('number'),
  statbonus: attr('number'),
  provfund: attr('number'),
  proftax: attr('number'),
  incometax: attr('number'),
  essp: attr('number'),
  otherearningsnt: attr('number'),
  oncallshiftallowance: attr('number'),
  gross: attr('number'),

  leaverolls: hasMany('leaveroll' ,{embedded: 'always', async:true}),
  attendances: hasMany('attendance' ,{embedded: 'always', async:true}),
  salaries: hasMany('salary' ,{embedded: 'always', async:true}),

  jobs: hasMany('job'),
  bids: hasMany('bid'), 

  editemployee: attr('boolean', { defaultValue: false }),








});
