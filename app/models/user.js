import DS from 'ember-data';
import Ember from 'ember';




export default DS.Model.extend({
  firstname: DS.attr('string'),
  middlename: DS.attr('string'),
  lastname: DS.attr('string'),
  email: DS.attr('string'),
  name:DS.attr('string'),
  password:DS.attr('string'),
  password_confirmation:DS.attr('string'),
  contact: DS.attr('string'),
  designation: DS.attr('string'),
  dateofjoin: DS.attr('date'),
  department: DS.attr('string'),
  location: DS.attr('string'),
  gender: DS.attr('string'),
  maritialstatus: DS.attr('string'),
  dob: DS.attr('date'),
  temporaryaddress: DS.attr('string'),
  permenantaddress: DS.attr('string'),
  status: DS.attr('string'),
  url: DS.attr('string'),
  fullurl: DS.attr('string'),
  thumburl: DS.attr('string'),
  pass: DS.attr('string'),
  role: DS.attr('string'),


  basic: DS.attr('number' , {default:0}),
  houserentallowance: DS.attr('number' , {default:0}),
  adhoc: DS.attr('number' , {default:0}),
  transport: DS.attr('number' , {default:0}),
  misc: DS.attr('number' , {default:0}),
  statbonus: DS.attr('number' , {default:0}),
  provfund: DS.attr('number' , {default:0}),
  proftax: DS.attr('number' , {default:0}),
  incometax: DS.attr('number' , {default:0}),
  essp: DS.attr('number' , {default:0}),
  otherearningsnt: DS.attr('number' , {default:0}),
  oncallshiftallowance: DS.attr('number' , {default:0}),
  gross: DS.attr('number' , {default:0}),

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

  leaverolls: DS.hasMany('leaveroll' ,{embedded: 'always', async:true}),
  attendances: DS.hasMany('attendance' ,{embedded: 'always', async:true}),
  salaries: DS.hasMany('salary' ,{embedded: 'always', async:true}),

  jobs: DS.hasMany('job' , {embedded: 'always', async:true}),
  bids: DS.hasMany('bid',  {embedded: 'always', async:true}),

  editemployee: DS.attr('boolean', { defaultValue: false }),










});
