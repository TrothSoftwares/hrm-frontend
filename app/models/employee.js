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


  basic: attr('number' , {default:0}),
  houserentallowance: attr('number' , {default:0}),
  adhoc: attr('number' , {default:0}),
  transport: attr('number' , {default:0}),
  misc: attr('number' , {default:0}),
  statbonus: attr('number' , {default:0}),
  provfund: attr('number' , {default:0}),
  proftax: attr('number' , {default:0}),
  incometax: attr('number' , {default:0}),
  essp: attr('number' , {default:0}),
  otherearningsnt: attr('number' , {default:0}),
  oncallshiftallowance: attr('number' , {default:0}),
  gross: attr('number' , {default:0}),

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
