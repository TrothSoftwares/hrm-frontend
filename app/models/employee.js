import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import {hasMany } from 'ember-data/relationships';
import Ember from 'ember';




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

  grossComputed: Ember.computed('basic' , 'houserentallowance','adhoc','transport','misc','statbonus','provfund','proftax','incometax','essp','otherearningsnt' ,'oncallshiftallowance',function() {
    return parseInt(this.get('basic'))  +
           parseInt(this.get('houserentallowance'))+
           parseFloat(this.get('adhoc')) +
           parseFloat(this.get('transport')) +
           parseFloat(this.get('misc')) +
           parseFloat(this.get('statbonus')) +
           parseFloat(this.get('provfund')) +
           parseFloat(this.get('proftax')) +
           parseFloat(this.get('incometax')) +
           parseFloat(this.get('essp')) +
           parseFloat(this.get('otherearningsnt')) +
           parseFloat(this.get('oncallshiftallowance')) ;


  }),

  leaverolls: hasMany('leaveroll' ,{embedded: 'always', async:true}),
  attendances: hasMany('attendance' ,{embedded: 'always', async:true}),
  salaries: hasMany('salary' ,{embedded: 'always', async:true}),

  jobs: hasMany('job' , {embedded: 'always', async:true}),
  bids: hasMany('bid',  {embedded: 'always', async:true}),

  editemployee: attr('boolean', { defaultValue: false }),










});
